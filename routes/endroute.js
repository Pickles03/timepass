const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
    res.send(`
        <h1>End Route</h1>
        <p>This is the end route</p>
        <br>
        <form action="/" method="get">
            <button type="submit">Go back</button>
        </form>
        `);
});

module.exports = router;

/* review version

const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
    res.send(`
    <h1>End Route</h1>
    <p>This is the end route</p>
    <br>
    <a href="/"><button>Go back</button></a>
    `);
}

*/