export const getFoodsByCategoryId = async (req, res) => {
    const { categoryId } = req.params; 

    console.log("Category ID:", categoryId);
    try {
        const foods = await FoodModel.find({ category: categoryId }).populate('category');

        if (!foods.length) {
            return res.status(404).json({ message: "No foods found for this category" });
        }

        console.log("Fetched foods:", foods);
        res.json({ message: "success", data: foods });
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: "Error occurred", error: err.message });
    }
};
