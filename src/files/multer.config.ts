import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import path, { join, extname, resolve } from 'path';
import { ALLOWED_MIME_TYPES } from 'src/decorator/customize';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  private readonly uploadRoot = 'public/images/'; // Thư mục gốc lưu file upload

  /**
   * Lấy đường dẫn root của dự án
   * @returns Đường dẫn thư mục gốc của dự án
   */
  private getRootPath(): string {
    return process.cwd();
  }

  /**
   * Đảm bảo thư mục tồn tại, nếu chưa có thì tạo mới
   * @param targetDirectory Đường dẫn thư mục cần kiểm tra/tạo
   */
  private ensureExists(targetDirectory: string): void {
    const absolutePath = resolve(this.getRootPath(), targetDirectory);
    if (!existsSync(absolutePath)) {
      mkdirSync(absolutePath, { recursive: true });
    }
  }

  /**
   * Loại bỏ các ký tự đặc biệt khỏi tên file để tránh lỗi
   * @param fileName Tên file gốc
   * @returns Tên file đã được xử lý
   */
  private sanitizeFileName(fileName: string): string {
    return fileName.replace(/[^a-zA-Z0-9-_]/g, '_'); // Chỉ giữ lại chữ cái, số, dấu gạch ngang, gạch dưới
  }

  /**
   * Cấu hình Multer cho việc upload file
   * @returns Cấu hình MulterModuleOptions
   */
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        /**
         * Xác định thư mục lưu file dựa vào header `folder_type`
         */
        destination: (req, file, cb) => {
          const folder =
            typeof req.headers.folder_type === 'string'
              ? req.headers.folder_type
              : 'default';
          const uploadPath = join(this.getRootPath(), this.uploadRoot, folder);
          this.ensureExists(uploadPath);
          cb(null, uploadPath);
        },
        /**
         * Xác định tên file sau khi upload
         */
        filename: (req, file, cb) => {
          const fileExt = extname(file.originalname);
          const baseName = this.sanitizeFileName(
            path.basename(file.originalname, fileExt),
          );
          const finalName = `${baseName}-${Date.now()}${fileExt}`;
          cb(null, finalName);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // Giới hạn dung lượng file: 5MB
      },
      fileFilter: (req, file, cb) => {
        /**
         * Kiểm tra MIME type của file upload có hợp lệ không
         */
        if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
          console.log(
            `File upload bị từ chối: ${file.originalname} (${file.mimetype})`,
          );
          return cb(null, false); // Trả về false thay vì throw lỗi
        }
        cb(null, true);
      },
    };
  }
}
