const express = require("express");

const { joiSchema } = require("../../models/user");
const {
  controllerWrapper,
  validation,
  authenticate,
  uploadMiddleware,
} = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));
// register

router.get("/verify/:verifyToken", controllerWrapper(ctrl.verify));

router.post("/verify", validation(joiSchema), controllerWrapper(ctrl.reverify));

router.post("/signin", validation(joiSchema), controllerWrapper(ctrl.signin));
// login

router.get("/signout", authenticate, controllerWrapper(ctrl.signout));
// logout

router.get("/current", authenticate, controllerWrapper(ctrl.getCurrentUser));

router.patch(
  "/avatars",
  authenticate,
  uploadMiddleware.single("avatar"),
  controllerWrapper(ctrl.addUserAvatar)
);

module.exports = router;
