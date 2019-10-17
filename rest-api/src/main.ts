import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {HttpExceptionFilter} from './filters/http.filter';
import {FallbackExceptionFilter} from './filters/fallback.filter';
import * as mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api");
    app.useGlobalFilters(
        new FallbackExceptionFilter(),
        new HttpExceptionFilter());

    await app.listen(9000);

}

bootstrap();



