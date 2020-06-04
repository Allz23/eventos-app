const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expSessions = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(expSessions);

// Configuración de los modulos
const app = express();
const mongodb_conn_module = require('./config/mongoDBConn');
mongodb_conn_module.connect();

app.use(express.static(__dirname + '/public/'));

const PORT = process.env.PORT || 80;
app.set('port', PORT);
const SECRET = process.env.SECRET || 'vue_mastery-app';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:8080';

app.set('port', PORT);

const corsOptions = {
  origin: CLIENT_ORIGIN,
  credentials: true
};

// - Middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser(SECRET));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expSessions({
    secret: SECRET,
    saveUninitialized: false,
    resave: false,
    // Configuracion para almacenar la sesion en la base de datos
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Variables globales
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Rutas
app.use(require('./routes/eventos'));
app.use(require('./routes/usuarios'));

// Iniciamos el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});
