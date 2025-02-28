import express from 'express';
import { createUser } from '../controllers/users/create-user.js';
import { deleteUser } from '../controllers/users/delete-user.js';
import { updateUser } from '../controllers/users/update-user.js';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { validateEmailMiddleware } from '../middleware/validateEmail.js';
import { getUsers } from '../controllers/users/get-all-users.js';
import { login } from '../controllers/users/login.js';

export const userRouter = express.Router();

userRouter.get('/', authorizationMiddleware, getUsers)
userRouter.post('/', validateEmailMiddleware, createUser);
userRouter.put('/',authorizationMiddleware, updateUser)
userRouter.delete('/',authorizationMiddleware, deleteUser)
userRouter.post('/login', validateEmailMiddleware, login)
