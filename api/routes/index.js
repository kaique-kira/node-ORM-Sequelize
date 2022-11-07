const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes');
const turmas = require('./turmaRoutes');
const niveis = require('./nivelRoutes');

module.exports = app => {
app.use(bodyParser.json());
app.use(pessoas);
app.use(turmas);
app.use(niveis);
}