import { Persona } from './persona.entity';
export declare const PERSONA_REPOSITORY: unique symbol;
export interface PersonaRepository {
    create(persona: Persona): Promise<Persona>;
}
