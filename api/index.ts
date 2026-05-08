import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import { AppModule } from '../src/app.module';
import { configureApp } from '../src/configure-app';

let cachedHandler:
  | ((request: Request, response: Response) => Promise<unknown>)
  | null = null;

async function createHandler(): Promise<
  (request: Request, response: Response) => Promise<unknown>
> {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  configureApp(app);
  await app.init();

  return serverless(server, {
    provider: 'aws',
    callbackWaitsForEmptyEventLoop: false,
  }) as (
    request: Request,
    response: Response,
  ) => Promise<unknown>;
}

export default async function handler(
  request: Request,
  response: Response,
): Promise<unknown> {
  if (!cachedHandler) {
    cachedHandler = await createHandler();
  }

  return cachedHandler(request, response);
}
