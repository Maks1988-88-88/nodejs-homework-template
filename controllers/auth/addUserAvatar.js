const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
// const sendSuccessRes = require("../../helpers/sendSuccessRes");
const { sendSuccessRes, imageResize } = require("../../helpers/index");


// ====
// const imageResize = require("../../helpers/imageResize");
// ====

const addUserAvatar = async (req, res) => {
  const { _id, email, subscription } = req.user;
  const { originalname, path: oldPath } = req.file;

  const uploadPath = path.join(
    __dirname,
    "../../",
    "public/avatars",
    originalname
  );

  const [extn, name] = originalname.split(".").reverse();
  const avatarURL = path.join("/avatars", `${name}-${_id}.${extn}`);

  try {
    await imageResize(oldPath, 250, 250);
    await fs.rename(oldPath, uploadPath);
    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    sendSuccessRes(
      res,
      {
        user: { _id, email, subscription, avatarURL },
        message: "Success",
      },
      200
    );
  } catch (error) {
    await fs.unlink(oldPath);
  }
};
module.exports = addUserAvatar;
