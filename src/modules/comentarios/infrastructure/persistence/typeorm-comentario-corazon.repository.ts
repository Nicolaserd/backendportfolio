import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddCorazonResponse } from '../../application/dto/add-corazon.response';
import { ComentarioCorazonPort } from '../../application/ports/comentario-corazon.port';
import { ComentarioOrmEntity } from './comentario.orm-entity';

@Injectable()
export class TypeOrmComentarioCorazonRepository
  implements ComentarioCorazonPort
{
  constructor(
    @InjectRepository(ComentarioOrmEntity)
    private readonly comentarioRepository: Repository<ComentarioOrmEntity>,
  ) {}

  async addHeart(comentarioId: string): Promise<AddCorazonResponse> {
    const updateResult = await this.comentarioRepository
      .createQueryBuilder()
      .update(ComentarioOrmEntity)
      .set({
        cantidadLikes: () => '"cantidad_likes" + 1',
      })
      .where('id = :comentarioId', { comentarioId })
      .returning(['id', 'cantidad_likes'])
      .execute();

    if (!updateResult.affected) {
      throw new NotFoundException('No existe un comentario con ese id.');
    }

    const updatedComentario = updateResult.raw[0] as {
      id: string;
      cantidad_likes: number;
    };

    return {
      comentarioId: updatedComentario.id,
      corazonesRecibidos: Number(updatedComentario.cantidad_likes),
    };
  }
}
