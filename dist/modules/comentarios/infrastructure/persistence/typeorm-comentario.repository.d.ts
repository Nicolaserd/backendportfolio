import { Repository } from 'typeorm';
import { Comentario } from '../../domain/comentario.entity';
import { ComentarioRepository } from '../../domain/comentario.repository';
import { ComentarioOrmEntity } from './comentario.orm-entity';
export declare class TypeOrmComentarioRepository implements ComentarioRepository {
    private readonly repository;
    constructor(repository: Repository<ComentarioOrmEntity>);
    create(comentario: Comentario): Promise<Comentario>;
}
