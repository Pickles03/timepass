const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
    res.send('<h1>End Route</h1><p>This is the end route</p><br><a href="/">Go back</a>');
});

module.exports = router;