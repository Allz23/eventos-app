// Rutas para el manejo mde los datos referentes a los eventos
const { Router } = require('express');
const router = Router();
const Usuario = require('../models/Usuario');
const Evento = require('../models/Evento');

router.get('/', async (req, res) => {
  await Evento.find({}, async function(error, eventos) {
    if (error) {
      console.warn(error);
    }
    res.json({
      datos: eventos
    });
  });
});
// Exportamos las rutas
module.exports = router;
