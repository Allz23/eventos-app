// Modelo para un evento en la base de datos
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Usuario = mongoose.model('Usuario');

const eventoSchema = new Schema({
  usuario: { type: Schema.ObjectId, ref: 'Usuario' },
  categoria: { type: String },
  organizador: { type: String },
  titulo: { type: String },
  descripcion: { type: String },
  locacion: { type: String },
  fecha: { type: Date },
  hora: { type: String },
  participantes: { type: Array }
});

let Evento = mongoose.model('Evento', eventoSchema, 'eventos');
module.exports = Evento;
