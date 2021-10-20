const { BadRequest,NotFound } = require("http-errors");
const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound(`Email ${email} not found`);
  }
  if (!user.comparePassword(password)) {
    throw new BadRequest("invalid password");
  }
    // if (!bcrypt.compareSync(password, user.password)) {
    //   throw new BadRequest("invalid password");
    //   // res.status(400).json({
    //   //   starus: "error",
    //   //   code: 400,
    //   //   message: "invalid password",
    //   // });
    // }

    const token = 'dasdas.fasfas.dsasdaddas';
    res.json({
      status: 'success',
      code: 200,
      data: {
        token
      }
    })
};

module.exports = signin;
