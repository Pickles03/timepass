const express = require('express');
const app = express();
const index = require('./routes/index');
const endroute = require('./routes/endroute');

app.use('/', index);
app.use('/endroute', endroute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
