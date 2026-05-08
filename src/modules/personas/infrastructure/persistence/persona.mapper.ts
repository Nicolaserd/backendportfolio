import { Persona } from '../../domain/persona.entity';
import { PersonaOrmEntity } from './persona.orm-entity';

export class PersonaMapper {
  static toPersistence(persona: Persona): PersonaOrmEntity {
    const entity = new PersonaOrmEntity();
    entity.id = persona.id;
    entity.nombre = persona.nombre;
    entity.correo = persona.correo;
    entity.createdAt = persona.createdAt;
    return entity;
  }

  static toDomain(entity: PersonaOrmEntity): Persona {
    return new Persona(entity.id, entity.createdAt, entity.nombre, entity.correo);
  }
}
