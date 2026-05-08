import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { NoScript } from '../../../../shared/presentation/validators/no-script.decorator';

export class CreateComentarioRequestDto {
  @IsString({ message: 'nombre_usuario debe ser texto.' })
  @IsNotEmpty({ message: 'nombre_usuario es obligatorio.' })
  @MinLength(2, { message: 'nombre_usuario debe tener al menos 2 caracteres.' })
  @MaxLength(120, {
    message: 'nombre_usuario no puede exceder 120 caracteres.',
  })
  @NoScript({ message: 'nombre_usuario contiene contenido no permitido.' })
  nombre_usuario!: string;

  @IsString({ message: 'comentario debe ser texto.' })
  @IsNotEmpty({ message: 'comentario es obligatorio.' })
  @MinLength(3, { message: 'comentario debe tener al menos 3 caracteres.' })
  @MaxLength(1000, { message: 'comentario no puede exceder 1000 caracteres.' })
  @NoScript({ message: 'comentario contiene contenido no permitido.' })
  comentario!: string;

  @IsOptional()
  @IsString({ message: 'correo debe ser texto.' })
  @IsEmail({}, { message: 'correo debe tener un formato valido.' })
  @MaxLength(180, { message: 'correo no puede exceder 180 caracteres.' })
  @NoScript({ message: 'correo contiene contenido no permitido.' })
  correo?: string;
}
