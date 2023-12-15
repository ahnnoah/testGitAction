import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): string {
    return this.testService.getText();
  }

  @Post()
  testBody(@Body() body: TestDto) {
    return body;
  }
}
