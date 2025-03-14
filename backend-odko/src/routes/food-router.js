import express from 'express';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createFood } from '../controllers/foods/create-food.js';
import { getFoods } from '../controllers/foods/get-food.js';
import { getFoodsByCategory } from '../controllers/foods/getFoodbyCate.js';

export const foodRouter = express.Router();

foodRouter.get('/category', getFoodsByCategory);
foodRouter.get('/foods', getFoods);
foodRouter.get('/category', getFoodsByCategory);
foodRouter.post('/', authorizationMiddleware, createFood);
