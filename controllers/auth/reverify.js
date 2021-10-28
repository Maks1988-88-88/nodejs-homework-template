const { NotFound, BadRequest } = require("http-errors");
const { User } = require("../../models/");
const { sendSuccessRes, sendEmail } = require("../../helpers");

const reverify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFound(`User with email ${email} do not exist`);
  }

  if (user.verify && !user.verifyToken) {
    throw new BadRequest("Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Please Verify Your Email",
    html: `<p>Let's confirm your email <a href='http://localhost:3000/api/auth/verify/${user.verifyToken}' target='_blank'>${user.email}</a> and you can start using app.</p>`,
  };

  await sendEmail(verifyEmail);

  sendSuccessRes(res, { message: "Verification email sent" }, 200);
};

module.exports = reverify;
