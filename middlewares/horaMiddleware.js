const hora = (req, res, next) => {
    const date = new Date();
    req.currentHour = date.getHours();
    req.currentMinute = date.getMinutes();
    next();
}

module.exports = hora;