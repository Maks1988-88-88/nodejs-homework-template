const { NotFound } = require("http-errors");
const { User } = require("../../models/");
const { sendSuccessRes } = require("../../helpers");

const verify = async (req, res) => {
  const { verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });

  if (!user) {
    throw new NotFound("User do not exist or not verify");
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null });
  sendSuccessRes(res, { message: "Verification successful" }, 200);
};

module.exports = verify;
