import { IsString } from '@nestjs/class-validator';

export class TestDto {
  @IsString()
  test: string;
}
