import * as dotenv from 'dotenv';
dotenv.config();

export const isProduction = process.env.NODE_ENV === 'production';

export const ADDRESS = process.env.ADDRESS || '0.0.0.0';

export const PORT = +process.env.API_PORT || 3001;

export const CORS_ORIGIN = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',')
  : ['http://localhost:3000', 'http://localhost:3001'];

export const CORS_ALLOWED_HEADERS = process.env.CORS_ALLOWED_HEADERS
  ? process.env.CORS_ALLOWED_HEADERS.split(',')
  : ['Content-Type', 'Authorization'];
