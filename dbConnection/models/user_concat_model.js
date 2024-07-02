import mongoose from "mongoose";
const userConcatSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    
    // isEmailVerified: {
    //   type: Boolean,
    //   default: false,
    // },
    message_user: {
        type: String,
        required: true,
        //trim: true,
        // lowercase: true,
      },
    
  },
  { timestamps: true }
);

const userConcatModel = mongoose.model("user_concat", userConcatSchema);
export default userConcatModel;
