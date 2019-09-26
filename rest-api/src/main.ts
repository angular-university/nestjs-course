import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {GlobalExceptionFilter} from './global-errors.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(9000);
}
bootstrap();
