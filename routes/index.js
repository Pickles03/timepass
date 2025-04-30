const express = require('express');
const router = express.Router();

const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
    const hour = req.currentHour.toString().padStart(2, '0');
    const minute = req.currentMinute.toString().padStart(2, '0');

    res.send(`
        <h1>Welcome!</h1>
        <p>It is currently ${hour}:${minute}</p>
        <form action="/endroute" method="get">
            <button type="submit">End Route</button>
        </form>
        `);
})

module.exports = router;

/* review version

const express = require('express');
const router = express.Router(); // in this case we use router because we are going to use the same route in different files

router.get('/', (req, res) => {
    res.send(`
        <h1>Welcome!</h1>
        <p>It is currently ${req.currentTime}</p>
        <a href="/endroute"><button>End Route</button></a>
    `)})




module.exports = router;

*/