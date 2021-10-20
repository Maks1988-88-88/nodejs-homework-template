const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers");

const listContacts = async (req, res) => {
  const results = await Contact.find({});
  sendSuccessRes(res, { results });
};

module.exports = listContacts;
