
import express from 'express';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createCategory } from '../controllers/foodCategories/create-food.js';
import { getCategories } from '../controllers/foodCategories/getCategories.js';

export const categoryRouter = express.Router();

categoryRouter.post('/', authorizationMiddleware, createCategory)
categoryRouter.get('/', getCategories);