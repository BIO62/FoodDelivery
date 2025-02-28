import { UserModel } from "../../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
