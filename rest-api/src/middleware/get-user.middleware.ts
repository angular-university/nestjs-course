import {Injectable, NestMiddleware} from '@nestjs/common';


@Injectable()
export class GetUserMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: () => void){


    }


}
