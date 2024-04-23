import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('error')
  getError() {
    throw new Error('Error~~!');
  }

  @Get('test-cache')
  async testCache() {
    return await this.appService.testCache();
  }
}
