const express = require("express");
const router = express.Router();
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const {
  contactValidation,
  contactStatusValidation,
} = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

router.get("/", controllerWrapper(ctrl.listContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(contactValidation),
  controllerWrapper(ctrl.addContact)
);

router.put(
  "/:contactId",
  authenticate,
  validation(contactValidation),
  controllerWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId",
  authenticate,
  validation(contactStatusValidation),
  controllerWrapper(ctrl.updateContactStatus)
);

router.delete(
  "/:contactId",
  authenticate,
  controllerWrapper(ctrl.removeContactById)
);

module.exports = router;
