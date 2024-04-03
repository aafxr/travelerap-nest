import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { ip, originalUrl } = req;
    const date = new Date()
    console.log(`[${date.toISOString()}] [${ip}] ${originalUrl}`);
    next();
  }
}
