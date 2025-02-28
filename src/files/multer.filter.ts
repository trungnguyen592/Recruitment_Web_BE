import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * Bộ lọc ngoại lệ (Exception Filter) cho các lỗi liên quan đến Multer
 * Khi xảy ra lỗi upload file, bộ lọc này sẽ trả về response có HTTP status 422 (Unprocessable Entity)
 */
@Catch(Error)
export class MulterExceptionFilter implements ExceptionFilter {
  /**
   * Xử lý lỗi và trả về response phù hợp
   * @param error Lỗi xảy ra
   * @param host Đối tượng ArgumentsHost chứa thông tin request & response
   */
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: error.message,
      error: 'Unprocessable Entity', // Thông báo lỗi chuẩn theo HTTP status 422
    });
  }
}
