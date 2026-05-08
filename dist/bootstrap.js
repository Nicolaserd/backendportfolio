"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const configure_app_1 = require("./configure-app");
async function createApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, configure_app_1.configureApp)(app);
    return app;
}
//# sourceMappingURL=bootstrap.js.map