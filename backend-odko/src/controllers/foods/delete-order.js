import { OrderModel } from "../../models/order.schema.js";

export const deleteOrder = async (req, res) =>{
    try{
        const result= await OrderModel.deleteMany()
        res.json({ message : `${result.deletedCount} users deleted successfully`})
    } catch{
        res.status(505).json({ message: "Error deleting users", error: error.message })
    }
};