import express from 'express';
import { ArticleController } from '../controller/article-controller';

export const apiRouter =  express.Router();

apiRouter.get("/api/articles", ArticleController.getAll)
//apiRouter.get("/api/articles/:articleId(\\d+)", ArticleController.get)