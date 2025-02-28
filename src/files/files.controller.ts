import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UploadedFiles,
  UnprocessableEntityException,
  UseFilters,
} from '@nestjs/common';
import { FilesService } from './files.service';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import {
  ALLOWED_MIME_TYPES,
  Public,
  ResponseMessage,
} from 'src/decorator/customize';
import { ApiTags } from '@nestjs/swagger';
import fs from 'fs';
import { MulterExceptionFilter } from './multer.filter';
@ApiTags('files')
@Controller('files')
@UseFilters(MulterExceptionFilter)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  /**
   * Upload một file đơn lẻ
   * @param file File được upload
   * @returns Thông tin file đã upload
   */
  @Public()
  @Post('upload')
  @ResponseMessage('Upload single file')
  @UseInterceptors(FileInterceptor('fileUpload'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      if (!file) {
        throw new UnprocessableEntityException(
          'Please select a file to upload',
        );
      }

      // Validate loại file
      if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
        throw new UnprocessableEntityException(
          `Invalid file type. Only ${Array.from(
            ALLOWED_MIME_TYPES.values(),
          ).join(', ')} files are allowed`,
        );
      }

      // Kiểm tra kích thước file
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new UnprocessableEntityException(
          'File size must be less than 5MB',
        );
      }

      return {
        fileName: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        fileType: ALLOWED_MIME_TYPES.get(file.mimetype),
      };
    } catch (error) {
      if (file?.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throw new UnprocessableEntityException(
        'Failed to upload file. Please try again',
      );
    }
  }

  /**
   * Upload nhiều file từ nhiều trường khác nhau
   * @param files Danh sách file được upload
   * @returns Thông tin các file đã upload
   */
  @Public()
  @Post('upload-multiple')
  @ResponseMessage('Upload multiple files')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  uploadMultipleFiles(
    @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    if (!files || (!files.avatar && !files.background)) {
      throw new BadRequestException('Không có file hợp lệ được tải lên.');
    }

    const validateFile = (file?: Express.Multer.File) => {
      if (!file) return null;
      if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
        throw new BadRequestException(
          `File ${file.originalname} không đúng định dạng.`,
        );
      }
      if (file.size > 1024 * 1024) {
        throw new BadRequestException(
          `File ${file.originalname} vượt quá 1MB.`,
        );
      }
      return file.filename;
    };

    return {
      message: 'Files uploaded successfully',
      files: {
        avatar: validateFile(files.avatar?.[0]),
        background: validateFile(files.background?.[0]),
      },
    };
  }

  /**
   * Upload bất kỳ file nào từ bất kỳ trường nào (không cần khai báo trước)
   * @param files Danh sách file được upload
   * @returns Thông tin các file đã upload
   */
  @Public()
  @Post('upload-any')
  @ResponseMessage('Upload multiple files with any field names')
  @UseInterceptors(AnyFilesInterceptor())
  uploadAnyFiles(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('Không có file nào được upload.');
    }

    const uploadedFiles = files.map((file) => {
      if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
        throw new BadRequestException(
          `File ${file.originalname} không đúng định dạng.`,
        );
      }
      if (file.size > 1024 * 1024) {
        throw new BadRequestException(
          `File ${file.originalname} vượt quá 1MB.`,
        );
      }
      return { fileName: file.filename, fieldName: file.fieldname };
    });

    return {
      message: 'Files uploaded successfully',
      files: uploadedFiles,
    };
  }
}
