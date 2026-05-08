import { Inject, Injectable } from '@nestjs/common';
import { AddCorazonResponse } from './application/dto/add-corazon.response';
import { CountComentariosResponse } from './application/dto/count-comentarios.response';
import { CreateComentarioResponse } from './application/dto/create-comentario.response';
import { ListComentariosResponse } from './application/dto/list-comentarios.response';
import {
  COMENTARIO_CORAZON_PORT,
  ComentarioCorazonPort,
} from './application/ports/comentario-corazon.port';
import {
  COMENTARIOS_QUERY_PORT,
  ComentariosQueryPort,
} from './application/ports/comentarios-query.port';
import { CreateComentarioUseCase } from './application/use-cases/create-comentario.use-case';
import { AddCorazonDto } from './dto/add-corazon.dto';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { ListComentariosQueryDto } from './dto/list-comentarios-query.dto';

@Injectable()
export class ComentariosService {
  constructor(
    private readonly createComentarioUseCase: CreateComentarioUseCase,
    @Inject(COMENTARIO_CORAZON_PORT)
    private readonly comentarioCorazonPort: ComentarioCorazonPort,
    @Inject(COMENTARIOS_QUERY_PORT)
    private readonly comentariosQueryPort: ComentariosQueryPort,
  ) {}

  async create(
    createComentarioDto: CreateComentarioDto,
  ): Promise<CreateComentarioResponse> {
    return this.createComentarioUseCase.execute({
      nombreUsuario: createComentarioDto.nombre_usuario,
      comentario: createComentarioDto.comentario,
      correo: createComentarioDto.correo,
    });
  }

  async findPaginated(
    query: ListComentariosQueryDto,
  ): Promise<ListComentariosResponse> {
    return this.comentariosQueryPort.findPaginated({
      page: query.page,
      itemsPerPage: query.itemsPorPagina,
    });
  }

  async addHeart(body: AddCorazonDto): Promise<AddCorazonResponse> {
    return this.comentarioCorazonPort.addHeart(body.comentario_id);
  }

  async count(): Promise<CountComentariosResponse> {
    return this.comentariosQueryPort.count();
  }
}
