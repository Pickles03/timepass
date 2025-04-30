const express = require('express');
const app = express();
const index = require('./routes/index');
const endroute = require('./routes/endroute');

app.use('/', index);
app.use('/endroute', endroute);

app.use((req, res) => {
    res.status(404).send('Page not found');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


/* review version

const express = require('express');
const app = express();
const PORT = 3000;

app.use(horaMiddleware); //In this case we are using the horaMiddleware.js file as a middleware

const indexRouter = require('./routes/index.js);
const endRouter = require('./routes/endroute.js');

const horaMiddleware = require('./middlewares/horaMiddleware.js');


app.use('/', indexRouter); //this is where we part from, in this case we are using the index.js file as a router
app.use('/endroute', endRouter); //this is where we part from, in this case we are using the endroute.js file as a router


app.use((req, res) => {
    res.status(404).send('Page not found')
});

app.listen(PORT, () => `The server is running on http://localhost:${PORT}`); //no need for {} since it is an arrow function

*/