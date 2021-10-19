const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContactById = require("./removeContactById");
const updateContact = require("./updateContact");
const updateContactStatus = require("./updateContactStatus");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContactById,
  updateContact,
  updateContactStatus,
};
