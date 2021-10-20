const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const User = model('user', userSchema);

module.exports = {
  User,
  joiSchema,
};