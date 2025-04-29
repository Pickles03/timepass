const validarHora = (req, res, next) => {
    const hora = req.currentHour;

    if (hora > 12 && hora < 24) {
        next();
    } else {
        res.send('<p>Aún no son las 12 de la mañana</p>');
    }
};

module.exports = validarHora;