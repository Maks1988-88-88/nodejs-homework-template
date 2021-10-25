const { User } = require("../../models");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");


const signup = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { protocol: "https", s: 250 });

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Already register");
  }
  const newUser = new User({ email, avatarURL });
  newUser.setPassword(password);
  await newUser.save();


  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
  });
};


module.exports = signup;
