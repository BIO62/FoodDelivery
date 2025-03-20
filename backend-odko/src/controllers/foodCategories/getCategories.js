import { FoodCategoryModel } from "../../models/food-category-model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await FoodCategoryModel.find();

    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
