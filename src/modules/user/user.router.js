import { Router } from "express";
import { contact  } from "./user_contact.js";
import { signup, verifyEmail } from "./user.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { signupQuery, signupSchema } from "./user.validation.js";
const userRouter=Router()
userRouter.post('/signup',validate(signupSchema,signupQuery),signup)
userRouter.post('/user_concat',contact )
userRouter.get('/verify',verifyEmail)
export default userRouter