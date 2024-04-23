import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [TestModule, CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    AppService,
  ],
})
export class AppModule {}
