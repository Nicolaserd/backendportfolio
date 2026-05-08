import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ComentariosModule } from './modules/comentarios/comentarios.module';
import { PersonaOrmEntity } from './modules/personas/infrastructure/persistence/persona.orm-entity';
import { ComentarioOrmEntity } from './modules/comentarios/infrastructure/persistence/comentario.orm-entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');

        return {
          type: 'postgres',
          ...(databaseUrl
            ? { url: databaseUrl }
            : {
                host: configService.getOrThrow<string>('DB_HOST'),
                port: Number(configService.get<number>('DB_PORT', 5432)),
                username: configService.getOrThrow<string>('DB_USERNAME'),
                password: configService.getOrThrow<string>('DB_PASSWORD'),
                database: configService.getOrThrow<string>('DB_NAME'),
              }),
          ssl: {
            rejectUnauthorized: false,
          },
          entities: [PersonaOrmEntity, ComentarioOrmEntity],
          synchronize: false,
        };
      },
    }),
    ComentariosModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
