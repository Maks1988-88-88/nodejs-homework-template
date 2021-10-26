const signup = require("./signup");
const signin = require("./signin");
const signout = require("./signout");
const getCurrentUser = require("./getCurrentUser");
const addUserAvatar = require("./addUserAvatar");
const verify = require("./verify");
const reverify = require("./reverify");






module.exports = {
  signup,
  verify,
  signin,
  signout,
  getCurrentUser,
  addUserAvatar,
  reverify,
};