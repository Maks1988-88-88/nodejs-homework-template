const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }

  sendSuccessRes(res, {
    result,
    message: `Contact update`,
  });
};

module.exports = updateContact;
