const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessRes } = require("../../helpers");

const updateContactStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }

  sendSuccessRes(res, {
    result,
    message: `Contact update`,
  });
};

module.exports = updateContactStatus;
