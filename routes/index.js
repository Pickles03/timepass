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