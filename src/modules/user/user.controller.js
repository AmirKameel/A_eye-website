import userModel from "../../../dbConnection/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import sendEmailService from "../services/sendEmail.service.js";

const signup = async (req, res, next) => {
  const { username, email, password ,age} = req.body;
  const isEmailExist = await userModel.findOne({ email });
  if (isEmailExist)
    return res.status(409).json({ message: "this email already exists" });


  const token = jwt.sign({ email }, 'tokenhere', { expiresIn: '1d' }); 

  const isEmailSent = await sendEmailService({
    to: email,
    subject: "Email Verification",
    message: 
   
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Verification</title>
<style>
/* Font Styles */
@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
}

@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
}

@font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
}

@font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
}

/* General Styles */
body {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 4px;
    line-height: 48px;
    margin: 2;
}

p {
    margin-bottom: 20px;
    line-height: 25px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
}

a {
    color: #ffffff;
    text-decoration: none;
}

a:hover {
    color: #ffffff;
    text-decoration: none;
}

.btn-link {
    display: inline-block;
    padding: 15px 25px;
    background-color: #FFA73B;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;
    border: 1px solid #FFA73B;
    transition: background-color 0.3s ease;
}

.btn-link:hover {
    background-color: #FFA73B;
}

</style>
</head>
<body>
    <div class="container">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <!-- LOGO -->
            <tr>
                <td bgcolor="#FFA73B" align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111;">
                                <h1>Welcome!</h1>
                                <img src="https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style="display: block; border: 0px;" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px;">
                                <p>We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">

                                <a href='http://localhost:3000/verify?token=${token}' target="_blank" class="btn-link">Verify Email</a>
                            </td>
                        </tr>
                     
                            <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px;">
                                <p>Cheers,<br>Our Team</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td bgcolor="#FFECD1" align="center" style="padding: 30px; border-radius: 4px; color: #666666;">
                                <h2>Thank you for confirmation</h2>
        
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
       
        </table>
    </div>
</body>
</html>
`
  });
  if (!isEmailSent)
    return res
      .status(500)
      .json({ message: "email not sent, please try again later" });

  const hashed = bcrypt.hashSync(password, 8);
  const user = await userModel.create({
    username,
    email,
    password: hashed ,
    age
  });
  return res.status(201).json({
    message: "user created successfully",
    user,
  });
};

const verifyEmail = async (req, res, next) => {
    const { token } = req.query;
    let decoded=jwt.verify(token,'tokenhere')
    const user = await userModel.findOneAndUpdate(
        { email: decoded.email, isEmailVerified: false },
        { isEmailVerified: true },
        { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found, or this email already confirmed" });
    return res.status(200).json({ message: "Email verified successfully"});
};


export { signup, verifyEmail };
