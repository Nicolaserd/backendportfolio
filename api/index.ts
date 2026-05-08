import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { type Express, type Request, type Response } from 'express';
import { AppModule } from '../src/app.module';
import { configureApp } from '../src/configure-app';

const expressServer = express();
let bootstrapPromise: Promise<Express> | null = null;

async function bootstrap(): Promise<Express> {
  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressServer),
      );

      configureApp(app);
      await app.init();

      return expressServer;
    })();
  }

  return bootstrapPromise;
}

export default async function handler(
  request: Request,
  response: Response,
): Promise<void> {
  const server = await bootstrap();
  server(request, response);
}
