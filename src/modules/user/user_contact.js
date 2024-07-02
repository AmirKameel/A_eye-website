import userConcatModel from "../../../dbConnection/models/user_concat_model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import sendEmailConcat from "../services/sendMailContact.js";
const contact = async (req, res, next) => {
  const { username, email ,message_user} = req.body;
//   const isEmailExist = await userConcatModel.findOne({ email });
//   if (isEmailExist)
//     return res.status(409).json({ message: "this email already exists" });

const user_concat = await userConcatModel.create({
    username,
    email,
    message_user,
    
  }); 
  const isEmailSent2 = await sendEmailConcat({
    to: user_concat.email,
    subject: 'Confirmation Message',
    message: `Dear ${user_concat.username} , Thank you for contacting A_Eye! We appreciate you reaching out and letting us know .

    We've received your inquiry and a member of our team will be in touch with you as soon as possible `,

  });

  if (!isEmailSent2)
    return res
      .status(500)
      .json({ message: "email not sent, please try again later" });

  const isEmailSent = await sendEmailConcat({
    to: "rihamibrahim171@gmail.com",
    subject: 'need to conect',
    message: `There is a new memeber need to connect >> ${user_concat.message_user} user email >> ${user_concat.email} `,
 
  });

  if (!isEmailSent)
    return res
      .status(500)
      .json({ message: "email not sent, please try again later" });

  
  return res.status(201).json({
    message: "user connected successfully",
    user_concat,
  });

 

  

};


// const contact2 = async (req, res, next) => {
//   const { username, email, phone ,message_user} = req.body;

//   const user_concat2 = await userConcatModel.create({
//       username,
//       email,
//       phone,
//       message_user,
      
//     }); 
    
//     const isEmailSent2 = await sendEmailConcat({
//       to: user_concat2.email,
//       subject: 'confirm',
//       message: "thank you ",
  
//     });

//     if (!isEmailSent2)
//       return res
//         .status(500)
//         .json({ message: "email not sent, please try again later" });

// };


export { contact};
