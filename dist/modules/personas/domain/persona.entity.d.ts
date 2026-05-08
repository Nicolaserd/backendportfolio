import { BaseEntity } from '../../../shared/domain/base.entity';
export declare class Persona extends BaseEntity {
    readonly nombre: string;
    readonly correo: string | null;
    constructor(id: string, createdAt: Date, nombre: string, correo: string | null);
}
