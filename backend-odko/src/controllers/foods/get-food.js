export const getFoods = async (req, res) => {
    const { category } = req.query;

    console.log("Category:", category); 
    try {
        const query = category ? { category } : {};
        const foods = await FoodModel.find(query).populate('category');

        console.log("Fetched foods:", foods);
        res.json({ message: "success", data: foods });
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: "Error occurred" });
    }
};
