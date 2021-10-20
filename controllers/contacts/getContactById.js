const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

module.exports = getContactById;
