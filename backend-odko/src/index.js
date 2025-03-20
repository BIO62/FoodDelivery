import express from 'express';
import dotenv from 'dotenv';
import { userRouter } from './routes/user-router.js';
import { foodRouter } from './routes/food-router.js';
import { mongooseConnect } from './utils/mongoose-connect.js';
import { categoryRouter } from './routes/catergory-routes.js';
import cors from 'cors';

dotenv.config();

const app = express(); 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
mongooseConnect();

app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/category', categoryRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
