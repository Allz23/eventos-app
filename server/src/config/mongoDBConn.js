// Configuraciones para la conexión con la base de datos
// const mongoose = require("mongoose");

const MONGODB_URI = `mongodb://127.0.0.1/vue-mastery-app`;
// -------------------------------------------
let mongoose = require('mongoose');

module.exports.connect = function() {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, '¡Error de conexión!'));
  db.once('open', function() {
    console.log(`MongoDB en línea...`);
  });
  return db;
};
