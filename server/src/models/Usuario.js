const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new Schema({
  usuario: { type: String },
  contraseña: { type: String }
});

let Usuario = mongoose.model('Usuario', userSchema, 'usuarios');
module.exports = Usuario;
