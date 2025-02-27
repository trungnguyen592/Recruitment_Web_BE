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
import { Public, ResponseMessage } from 'src/decorator/customize';
import { ApiTags } from '@nestjs/swagger';
import fs from 'fs';
import { MulterExceptionFilter } from './multer.filter';
@ApiTags('files')
@Controller('files')
@UseFilters(MulterExceptionFilter)
export class FilesController {
  private readonly allowedTypes = new Map([
    ['application/pdf', 'PDF'],
    ['application/msword', 'DOC'],
    [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'DOCX',
    ],
  ]);

  constructor(private readonly filesService: FilesService) {}
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

      // Validate file type
      if (!this.allowedTypes.has(file.mimetype)) {
        throw new UnprocessableEntityException(
          `Invalid file type. Only ${Array.from(
            this.allowedTypes.values(),
          ).join(', ')} files are allowed`,
        );
      }

      // Validate file size
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new UnprocessableEntityException(
          'File size must be less than 2MB',
        );
      }

      return {
        fileName: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        fileType: this.allowedTypes.get(file.mimetype),
      };
    } catch (error) {
      if (file?.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }

      throw new UnprocessableEntityException(
        error instanceof UnprocessableEntityException
          ? error.message
          : 'Failed to upload file. Please try again',
      );
    }
  }

  //Upload nhiều file từ nhiều trường khác nhau (có kiểm soát).
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
      if (!/^(doc|docx|pdf)$/i.test(file.mimetype)) {
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

  //Upload bất kỳ file nào từ bất kỳ trường nào (không cần khai báo trước).
  @Public()
  @Post('upload-any')
  @ResponseMessage('Upload multiple files with any field names')
  @UseInterceptors(AnyFilesInterceptor())
  uploadAnyFiles(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('Không có file nào được upload.');
    }

    // Kiểm tra từng file
    const uploadedFiles = files.map((file) => {
      if (!/^(jpg|jpeg|png|gif|txt|doc|docx|pdf)$/i.test(file.mimetype)) {
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
//   @Get()
//   findAll() {
//     return this.filesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.filesService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
//     return this.filesService.update(+id, updateFileDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.filesService.remove(+id);
//   }
// }
