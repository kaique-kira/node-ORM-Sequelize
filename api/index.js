const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;
//Conferir o id no Dbeaver pois pode mudar a qualquer momento
routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost/${port}`));