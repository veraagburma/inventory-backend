"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
const isOffline = process.env.USE_SQLITE === 'true';
exports.ormConfig = isOffline ? {
    type: 'sqlite',
    database: 'offline.db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
} : {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=ormconfig.js.map