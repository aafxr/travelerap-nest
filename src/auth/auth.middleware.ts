import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let token: string | undefined =
      req.headers['Authorization'] || req.headers['authorization'];

    if (!token) throw new UnauthorizedException();
    token = token.split(' ').pop();

    try {
      verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new UnauthorizedException();
    }

    next();
  }
}
