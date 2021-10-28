const { BadRequest, NotFound } = require("http-errors");
const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.verify) {
    throw new NotFound(`Email ${email} not found or not verify`);
  }
  if (!user.comparePassword(password)) {
    throw new BadRequest("invalid password");
  }

  const { _id } = user;
  const token = user.createToken();
  await User.findByIdAndUpdate(_id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = signin;
