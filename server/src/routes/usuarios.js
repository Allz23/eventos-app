const { Router } = require('express');
const passport = require('passport');

const router = Router();
const Usuario = require('../models/Usuario');
require('../lib/passport');

// Verificacion del usuario registrado
router.get('/usuario', (req, res) => {
  if (!req.user) {
    return res.send('null');
  } else {
    return res.json({
      _id: req.user._id,
      usuario: req.user.usuario
    });
  }
});

// Logueo del usuario
router.post(
  '/login',
  passport.authenticate('localLogin', { failWithError: true }),
  (req, res) => {
    return res.json({
      _id: req.user._id,
      usuario: req.user.usuario
    });
  },
  (err, req, res, next) => {
    res.status(403).send(err);
  }
);

// Cierre de sesión
router.post('/cerrar-sesion', (req, res) => {
  req.logOut();
  return res.status(200).json({ response: 'Cierre de sesion confirmado.' });
});

// Exportamos las rutas ----------------------------------------
module.exports = router;
