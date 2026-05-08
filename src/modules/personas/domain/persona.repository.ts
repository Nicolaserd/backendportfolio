import { Persona } from './persona.entity';

export const PERSONA_REPOSITORY = Symbol('PERSONA_REPOSITORY');

export interface PersonaRepository {
  create(persona: Persona): Promise<Persona>;
}
