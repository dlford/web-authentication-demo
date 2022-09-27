import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import multer from 'multer';
import cookieParser from 'cookie-parser';

import router from './routes';

import {
  CORS_ORIGIN,
  CORS_ALLOWED_HEADERS,
  PORT,
  ADDRESS,
} from './constants';

const app = express();
const corsOptions = {
  origin: CORS_ORIGIN,
  credentiale: true,
  allowedHeaders: CORS_ALLOWED_HEADERS,
};

const upload = multer();
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(upload.none());
app.use(cookieParser());
app.use(router);

app.listen(PORT, ADDRESS, () => {
  console.log(`API listening on ${ADDRESS}:${PORT}`);
});
