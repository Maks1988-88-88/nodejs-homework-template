const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers");

const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  sendSuccessRes(res, {
    message: `Contact with id ${contactId} deleted`,
  });
};

module.exports = removeContactById;
