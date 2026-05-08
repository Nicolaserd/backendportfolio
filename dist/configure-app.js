"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureApp = configureApp;
const common_1 = require("@nestjs/common");
const global_http_exception_filter_1 = require("./shared/presentation/filters/global-http-exception.filter");
function configureApp(app) {
    app.enableCors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: false,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: false,
        },
    }));
    app.useGlobalFilters(new global_http_exception_filter_1.GlobalHttpExceptionFilter());
}
//# sourceMappingURL=configure-app.js.map