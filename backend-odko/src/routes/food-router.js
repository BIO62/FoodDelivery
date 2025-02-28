
import express from 'express';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createFood } from '../controllers/foods/create-food.js';
import { getFoods } from '../controllers/foods/get-food.js';

export const foodRouter = express.Router();

foodRouter.get('/', getFoods)
foodRouter.post('/', authorizationMiddleware, createFood)
