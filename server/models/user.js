const mongoose = require('mongoose');

const schemaInterface = {
  type: String,
  required: true
};

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: schemaInterface,
  email: schemaInterface,
  password: schemaInterface,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
