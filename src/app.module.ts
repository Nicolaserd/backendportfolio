import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow<string>('DB_HOST'),
        port: Number(configService.get<number>('DB_PORT', 5432)),
        username: configService.getOrThrow<string>('DB_USERNAME'),
        password: configService.getOrThrow<string>('DB_PASSWORD'),
        database: configService.getOrThrow<string>('DB_NAME'),
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [PersonaOrmEntity, ComentarioOrmEntity],
        synchronize: false,
      }),
    }),
    ComentariosModule,
  ],
})
export class AppModule {}
