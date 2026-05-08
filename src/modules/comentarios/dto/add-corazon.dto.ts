import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AddCorazonDto {
  @IsString({ message: 'comentario_id debe ser texto.' })
  @IsNotEmpty({ message: 'comentario_id es obligatorio.' })
  @IsUUID('4', { message: 'comentario_id debe ser un UUID valido.' })
  comentario_id!: string;
}
