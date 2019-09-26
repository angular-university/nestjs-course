

import {ExceptionFilter, Catch, HttpException, ArgumentsHost} from '@nestjs/common';


@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    console.log("exception", JSON.stringify(exception));

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    response.status(statusCode).json({
      status: statusCode,
      errorMessage: exception.message.message,
    });
  }
}
