import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendOtpToEmail(email: string, otp: string) {
    await this.mailerService.sendMail({
      to: email,
      from: '"Support Team" <support@example.com>',
      subject: 'Mã xác nhận OTP',
      template: 'forgot-password',
      context: {
        otp: otp,
      },
      text: `Mã OTP của bạn là: ${otp}. Mã này sẽ hết hạn sau 2 phút.`,
    });
  }
}
