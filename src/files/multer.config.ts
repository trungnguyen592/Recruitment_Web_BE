import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import fs from 'fs';
import { diskStorage } from 'multer';
import path, { join, extname, resolve } from 'path';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  private readonly uploadRoot = 'public/images/';
  private readonly allowedMimeTypes = new Map([
    ['application/pdf', 'PDF'],
    ['application/msword', 'DOC'],
    [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'DOCX',
    ],
  ]);

  getRootPath(): string {
    return process.cwd();
  }

  ensureExists(targetDirectory: string) {
    const absolutePath = resolve(this.getRootPath(), targetDirectory);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath, { recursive: true });
    }
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folder = Array.isArray(req.headers.folder_type)
            ? req.headers.folder_type[0]
            : req.headers.folder_type || 'default';
          const uploadPath = join(this.getRootPath(), this.uploadRoot, folder);
          this.ensureExists(uploadPath);
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const fileExt = extname(file.originalname);
          const baseName = path.basename(file.originalname, fileExt);
          const finalName = `${baseName}-${Date.now()}${fileExt}`;
          cb(null, finalName);
        },
      }),
      limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
      },
      fileFilter: (req, file, cb) => {
        if (!this.allowedMimeTypes.has(file.mimetype)) {
          return cb(
            new Error(
              `Only ${Array.from(this.allowedMimeTypes.values()).join(
                ', ',
              )} files are allowed`,
            ),
            false,
          );
        }
        cb(null, true);
      },
    };
  }
}

// import { Injectable } from '@nestjs/common';
// import {
//   MulterModuleOptions,
//   MulterOptionsFactory,
// } from '@nestjs/platform-express';
// import fs from 'fs';
// import { diskStorage } from 'multer';
// import path, { join } from 'path';

// @Injectable()
// export class MulterConfigService implements MulterOptionsFactory {
//   getRootPath = () => {
//     return process.cwd();
//   };

//   ensureExists(targetDirectory: string) {
//     fs.mkdir(targetDirectory, { recursive: true }, (error) => {
//       if (!error) {
//         console.log('Directory successfully created, or it already exists');
//         return;
//       }
//       switch (error.code) {
//         case 'EEXIST':
//           break;
//         case 'ENOTDIR':
//           break;
//         default:
//           console.log(error);
//           break;
//       }
//     });
//   }

//   createMulterOptions(): MulterModuleOptions {
//     return {
//       storage: diskStorage({
//         destination: (req, file, cb) => {
//           const folder = req?.headers?.folder_type ?? 'default';
//           this.ensureExists(`public/images/${folder}`);
//           cb(null, join(this.getRootPath(), `public/images/${folder}`));
//         },
//         filename: (req, file, cb) => {
//           let extName = path.extname(file.originalname);
//           let baseName = path.basename(file.originalname, extName);
//           let finalName = `${baseName}-${Date.now()}${extName}`;
//           cb(null, finalName);
//         },
//       }),
//     };
//   }
// }
