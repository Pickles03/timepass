const validarHora = (req, res, next) => {
    const hora = req.currentHour;

    if (hora > 12 && hora < 24) {
        next();
    } else {
        res.send(`
            <p>Aún no son las 12 de la mañana</p>
            <form action="/" method="get">
                <button type="submit">Return</button>
            </form>
            `);
    }
};

module.exports = validarHora;

/* review version

const hora = 12

module.exports = (req, res, next) => {
    if (req.currentHour < hora || req.currentHour >= 24) {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
}

*/