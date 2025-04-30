const hora = (req, res, next) => {
    const date = new Date(); //it takes the local time from our computer
    req.currentHour = date.getHours();
    req.currentMinute = date.getMinutes();
    next();
}

module.exports = hora;

/* review version

module.exports = (req, res, next) => {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    req.currentHour = currentHours;
    req.currentMinute = currentMinutes;
    req.currentTime = `${currentHours}:${currentMinutes}`;
    nect();
}

*/
