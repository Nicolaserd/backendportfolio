import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AddCorazonDto } from '../dto/add-corazon.dto';
import { ComentariosService } from '../comentarios.service';
import { CreateComentarioDto } from '../dto/create-comentario.dto';
import { ListComentariosQueryDto } from '../dto/list-comentarios-query.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get('total')
  async count() {
    return this.comentariosService.count();
  }

  @Post('corazones')
  @HttpCode(HttpStatus.OK)
  async addHeart(@Body() body: AddCorazonDto) {
    return this.comentariosService.addHeart(body);
  }

  @Get()
  async findPaginated(@Query() query: ListComentariosQueryDto) {
    return this.comentariosService.findPaginated(query);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateComentarioDto) {
    return this.comentariosService.create(body);
  }
}
