import { UserModel } from "../../models/user.model.js";

export const deleteUser= async (req ,res) =>{
    try {
        const result = await UserModel.deleteMany(); 
        // idgaar n delete hiine select ch ymuu
        res.json({ message : `${result.deletedCount} users deleted successfully`});

    } catch (error) {
        res.status(500).json({ message: "Error deleting users", error: error.message });
    }
};