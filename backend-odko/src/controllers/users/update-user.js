import { UserModel } from "../../models/user.model.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res) => {
  const { password, email, id } = req.body;

  try {
    const updateData = {};
    if (email) {
      updateData.email = email;
    }
    if (password) {
      const saltRounds = 10;
      updateData.password = await bcrypt.hash(password, saltRounds);
    }
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id },
      updateData
      //   new true()
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};
