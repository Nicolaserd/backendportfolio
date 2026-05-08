import { Persona } from '../../domain/persona.entity';
import { PersonaOrmEntity } from './persona.orm-entity';
export declare class PersonaMapper {
    static toPersistence(persona: Persona): PersonaOrmEntity;
    static toDomain(entity: PersonaOrmEntity): Persona;
}
