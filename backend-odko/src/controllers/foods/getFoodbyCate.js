export const getFoodsByCategory = async (req, res) => {
  const { category } = req.query;
  console.log("Fetching foods for category:", category);

  if (!mongoose.Types.ObjectId.isValid(category)) {
    return res.status(400).json({ message: "Invalid category ID" });
  }

  try {
    const foods = await FoodModel.find({ category: mongoose.Types.ObjectId(category) });
    console.log("Fetched foods:", foods);
    res.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
