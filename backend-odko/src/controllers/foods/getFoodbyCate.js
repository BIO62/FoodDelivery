
import { FoodModel } from "../../models/food.model.js";

import mongoose from 'mongoose';

export const getFoodsByCategory = async (req, res) => {
  const { category } = req.query;

  if (!mongoose.Types.ObjectId.isValid(category)) {
    return res.status(400).json({ message: "Invalid category ID" });
  }

  try {
    const foods = await FoodModel.find({ category });
    res.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
