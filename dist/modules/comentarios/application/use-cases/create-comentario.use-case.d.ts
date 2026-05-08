import { ClockPort } from '../../../../shared/domain/ports/clock.port';
import { CreateComentarioCommand } from '../dto/create-comentario.command';
import { CreateComentarioResponse } from '../dto/create-comentario.response';
import { RegistroComentarioPort } from '../ports/registro-comentario.port';
export declare class CreateComentarioUseCase {
    private readonly registroComentarioPort;
    private readonly clock;
    constructor(registroComentarioPort: RegistroComentarioPort, clock: ClockPort);
    execute(command: CreateComentarioCommand): Promise<CreateComentarioResponse>;
}
