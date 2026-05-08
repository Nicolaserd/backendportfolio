import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ClockPort } from '../../../../shared/domain/ports/clock.port';
import { ColombiaClockService } from '../../../../shared/infrastructure/time/colombia-clock.service';
import { Persona } from '../../../personas/domain/persona.entity';
import { Comentario } from '../../domain/comentario.entity';
import { CreateComentarioCommand } from '../dto/create-comentario.command';
import { CreateComentarioResponse } from '../dto/create-comentario.response';
import {
  REGISTRO_COMENTARIO_PORT,
  RegistroComentarioPort,
} from '../ports/registro-comentario.port';

@Injectable()
export class CreateComentarioUseCase {
  constructor(
    @Inject(REGISTRO_COMENTARIO_PORT)
    private readonly registroComentarioPort: RegistroComentarioPort,
    @Inject(ColombiaClockService)
    private readonly clock: ClockPort,
  ) {}

  async execute(
    command: CreateComentarioCommand,
  ): Promise<CreateComentarioResponse> {
    const createdAt = this.clock.now();

    const persona = new Persona(
      randomUUID(),
      createdAt,
      command.nombreUsuario.trim(),
      command.correo?.trim() || null,
    );

    const comentario = new Comentario(
      randomUUID(),
      createdAt,
      command.comentario.trim(),
      0,
      persona.id,
    );

    const registro = await this.registroComentarioPort.createUserWithComment({
      persona,
      comentario,
    });

    return {
      usuario: {
        id: registro.persona.id,
        nombre: registro.persona.nombre,
        correo: registro.persona.correo,
      },
      comentario: {
        id: registro.comentario.id,
        contenido: registro.comentario.contenido,
        cantidadLikes: registro.comentario.cantidadLikes,
        fechaCreacion: registro.comentario.createdAt.toLocaleString('sv-SE', {
          timeZone: 'America/Bogota',
        }),
      },
    };
  }
}
