import { FoodCategoryModel } from "../../models/food-category-model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await FoodCategoryModel.find();
    const categoryNames = categories.map(category => category.categoryName); 
    res.json(categoryNames);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
