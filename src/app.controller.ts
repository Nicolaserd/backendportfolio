import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

type RootResponse = {
  message: string;
  database: {
    connected: boolean;
    functional: boolean;
    status: string;
  };
};

@Controller()
export class AppController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async root(): Promise<RootResponse> {
    try {
      await this.dataSource.query('SELECT 1');

      return {
        message: 'Hola mundo',
        database: {
          connected: true,
          functional: true,
          status: 'Base de datos conectada correctamente y funcional',
        },
      };
    } catch {
      return {
        message: 'Hola mundo',
        database: {
          connected: false,
          functional: false,
          status: 'Base de datos no disponible',
        },
      };
    }
  }
}
