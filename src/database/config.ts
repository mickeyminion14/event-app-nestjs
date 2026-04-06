import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: process.env.API_DB_HOST || 'localhost',
    port: Number(process.env.API_DB_PORT || 5432),
    username: process.env.API_DB_USERNAME || 'postgres',
    password: process.env.API_DB_PASSWORD || 'admin',
    database: process.env.API_DB_NAME || 'smartirb-db',
    schema: process.env.API_SCHEMA_NAME || 'smartirb',
    entities: [join(__dirname, '../app/**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, './migrations/*{.ts,.js}')],
    synchronize: false,
    logging: !!process.env.API_DB_LOGGING || false,
    namingStrategy: new SnakeNamingStrategy(),
  };
};
