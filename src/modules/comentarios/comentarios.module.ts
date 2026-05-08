import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColombiaClockService } from '../../shared/infrastructure/time/colombia-clock.service';
import { ComentarioOrmEntity } from './infrastructure/persistence/comentario.orm-entity';
import { ComentariosController } from './presentation/comentarios.controller';
import { CreateComentarioUseCase } from './application/use-cases/create-comentario.use-case';
import { ComentariosService } from './comentarios.service';
import { PersonaOrmEntity } from '../personas/infrastructure/persistence/persona.orm-entity';
import {
  COMENTARIO_CORAZON_PORT,
} from './application/ports/comentario-corazon.port';
import {
  COMENTARIOS_QUERY_PORT,
} from './application/ports/comentarios-query.port';
import {
  REGISTRO_COMENTARIO_PORT,
} from './application/ports/registro-comentario.port';
import { TypeOrmComentarioCorazonRepository } from './infrastructure/persistence/typeorm-comentario-corazon.repository';
import { TypeOrmComentariosQueryRepository } from './infrastructure/persistence/typeorm-comentarios-query.repository';
import { TypeOrmRegistroComentarioRepository } from './infrastructure/persistence/typeorm-registro-comentario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaOrmEntity, ComentarioOrmEntity])],
  controllers: [ComentariosController],
  providers: [
    ComentariosService,
    CreateComentarioUseCase,
    ColombiaClockService,
    {
      provide: REGISTRO_COMENTARIO_PORT,
      useClass: TypeOrmRegistroComentarioRepository,
    },
    {
      provide: COMENTARIO_CORAZON_PORT,
      useClass: TypeOrmComentarioCorazonRepository,
    },
    {
      provide: COMENTARIOS_QUERY_PORT,
      useClass: TypeOrmComentariosQueryRepository,
    },
  ],
})
export class ComentariosModule {}
