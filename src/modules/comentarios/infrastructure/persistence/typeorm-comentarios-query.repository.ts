import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountComentariosResponse } from '../../application/dto/count-comentarios.response';
import { ListComentariosResponse } from '../../application/dto/list-comentarios.response';
import { ComentariosQueryPort } from '../../application/ports/comentarios-query.port';
import { ComentarioOrmEntity } from './comentario.orm-entity';

@Injectable()
export class TypeOrmComentariosQueryRepository implements ComentariosQueryPort {
  constructor(
    @InjectRepository(ComentarioOrmEntity)
    private readonly comentarioRepository: Repository<ComentarioOrmEntity>,
  ) {}

  async findPaginated(input: {
    page: number;
    itemsPerPage: number;
  }): Promise<ListComentariosResponse> {
    const skip = (input.page - 1) * input.itemsPerPage;

    const [comentarios, totalItems] = await this.comentarioRepository.findAndCount(
      {
        relations: {
          usuario: true,
        },
        order: {
          createdAt: 'DESC',
        },
        skip,
        take: input.itemsPerPage,
      },
    );

    return {
      page: input.page,
      itemsPerPage: input.itemsPerPage,
      totalItems,
      totalPages: Math.ceil(totalItems / input.itemsPerPage),
      items: comentarios.map((comentario) => ({
        idUsuario: comentario.usuario.id,
        idComentario: comentario.id,
        nombreUsuario: comentario.usuario.nombre,
        corazonesRecibidos: comentario.cantidadLikes,
        comentario: comentario.contenido,
      })),
    };
  }

  async count(): Promise<CountComentariosResponse> {
    const totalComentarios = await this.comentarioRepository.count();

    return {
      totalComentarios,
    };
  }
}
