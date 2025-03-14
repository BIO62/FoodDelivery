import { Schema, model } from "mongoose";

const orderSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "USER",
        required: true,
      },
      totalRice: {
        type: Number,
        required: true,
      },
      foodOrderItems: [
        {
          foodItem: {
            type: Schema.Types.ObjectId,
            ref: "FoodItem",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
        },
      ],
      status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "CANCELLED"],
        default: "PENDING",
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export const OrderModel = model("Order", orderSchema);