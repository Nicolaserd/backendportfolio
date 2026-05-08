"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const comentarios_module_1 = require("./modules/comentarios/comentarios.module");
const persona_orm_entity_1 = require("./modules/personas/infrastructure/persistence/persona.orm-entity");
const comentario_orm_entity_1 = require("./modules/comentarios/infrastructure/persistence/comentario.orm-entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.getOrThrow('DB_HOST'),
                    port: Number(configService.get('DB_PORT', 5432)),
                    username: configService.getOrThrow('DB_USERNAME'),
                    password: configService.getOrThrow('DB_PASSWORD'),
                    database: configService.getOrThrow('DB_NAME'),
                    ssl: {
                        rejectUnauthorized: false,
                    },
                    entities: [persona_orm_entity_1.PersonaOrmEntity, comentario_orm_entity_1.ComentarioOrmEntity],
                    synchronize: false,
                }),
            }),
            comentarios_module_1.ComentariosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map