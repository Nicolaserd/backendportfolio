import { DataSource } from 'typeorm';
type RootResponse = {
    message: string;
    database: {
        connected: boolean;
        functional: boolean;
        status: string;
    };
};
export declare class AppController {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    root(): Promise<RootResponse>;
}
export {};
