const { User } = require("../../models");


const signout = async (req, res) => {
  const {_id} = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
   res.status(201).json({
     status: "success",
     code: 204,
     message: "Success signout",
   });
};

module.exports = signout;
