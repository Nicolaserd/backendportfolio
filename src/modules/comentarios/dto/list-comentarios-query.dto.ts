import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class ListComentariosQueryDto {
  @Type(() => Number)
  @IsInt({ message: 'page debe ser un numero entero.' })
  @Min(1, { message: 'page debe ser mayor o igual a 1.' })
  page = 1;

  @Type(() => Number)
  @IsInt({ message: 'itemsPorPagina debe ser un numero entero.' })
  @Min(1, { message: 'itemsPorPagina debe ser mayor o igual a 1.' })
  @Max(10, { message: 'itemsPorPagina no puede ser mayor a 10.' })
  itemsPorPagina = 10;
}
