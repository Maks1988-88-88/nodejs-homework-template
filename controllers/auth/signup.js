const { User } = require("../../models");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const { sendEmail } = require("../../helpers");



const signup = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { protocol: "https", s: 250 });

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Already register");
  }
  const verifyToken = v4();
  console.log(verifyToken);
  const newUser = new User({ email, avatarURL, verifyToken });
  newUser.setPassword(password);
  await newUser.save();

  const verifyEmail = {
    to: email,
    subject: "Please Verify Your Email",
    html: `<p>Let's confirm your email <a href='http://localhost:3000/api/auth/verify/${verifyToken}' target='_blank'>${email}</a> and you can start using app.</p>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
    data: {
      verifyToken,
    },
  });
};


module.exports = signup;
