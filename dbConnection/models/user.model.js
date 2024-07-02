
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    age:{
      type: Number,
      required: true,

    }
    

   
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
