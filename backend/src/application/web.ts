import express from "express";
import cors from './middleware/cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './middleware/error-middleware';
import { swagger } from './docs/swagger'
import { apiRouter } from './route/api';

dotenv.config();

const web = express ();
web.use(cors());
web.use(express.json());

swagger(web);
web.use(apiRouter);
web.use(errorMiddleware);

const PORT = process.env.PORT;
web.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});