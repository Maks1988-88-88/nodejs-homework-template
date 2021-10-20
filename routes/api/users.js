const express = require("express");

const {joiSchema} = require('../../models/user')
const { controllerWrapper, validation } = require("../../middlewares");

// const { auth: ctrl } = require('../../controllers/auth');
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));
// register

router.post("/signin", validation(joiSchema), controllerWrapper(ctrl.signin));
// login

router.get("/signout", controllerWrapper(ctrl.signout));
// logout

module.exports = router;
