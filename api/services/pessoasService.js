const Services = require('./Services');
const database = require('../models');
const sequelize = require('sequelize')

class PessoasServices extends Services {
    constructor(){
        super('Pessoas')
        this.matriculas = new Services('Matriculas');
    }

    async getRegistroAtivo(where = {}) {
        return database[this.nameModel].findAll({where: {...where}})
    }

    async getAllRegistros(where = {}) {
        return database[this.nameModel].scope('todos')
        .findAll({where: {...where}})
    }

    async cancelPessoasAndMatriculas(estudanteId){
        return database.sequelize.transaction(async transacao => {
            await super.updateRegistro({ativo: false}, estudanteId, {transaction: transacao});
            await this.matriculas.updateRegistros({status: 'cancelado'}, {estudante_id: estudanteId}, {transaction: transacao})});

        }
    }

module.exports = PessoasServices;