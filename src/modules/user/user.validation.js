import Joi from "joi";
export const signupSchema = Joi.object({
  body: {
    username: Joi.string().trim().max(30).lowercase(),
    address: Joi.string().trim().max(255).lowercase(),
    phone: Joi.string()
      .trim()
      .regex(/^(010|011|012|015)[0-9]{8}$/)
      .trim(),
      email: Joi.string().required().trim().lowercase(),
      password: Joi.string().required(),
      age: Joi.number().integer().required(),
  },
  params: {},
});
export const signupQuery = Joi.object({});