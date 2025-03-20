import { FoodModel } from '../../models/food.model.js';

export const createFood = async (req, res) => {
    const { foodName, price, image, ingredients, category } = req.body;

    try {
        const newFood = await FoodModel.create({ foodName, price, image, ingredients, category });
        res.status(201).json({ message: 'Success', food: newFood });
    } catch (err) {
        console.error("Error occurred while creating food:", err);
        res.status(403).json({ message: "Error occurred", error: err.message });
    }
};
