const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers/index");

const getCurrentUser = async (req, res) => {
  const { _id, email, subscription } = req.user;
  const contacts = await Contact.find({ owner: _id });
  sendSuccessRes(
    res,
    { user: { _id, email, subscription }, contacts, message: "Success" },
    200
  );
};

module.exports = getCurrentUser;
