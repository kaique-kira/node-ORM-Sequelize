const database = require('../models')

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }
    async getAllRegistros(){
        return database[this.nomeDoModelo].findAll(); 
    }
    async getOneRegistro(id){

    }
    async createRegistro(dados) {

    }
    async updateRegistro(dadosAtualizados, id, transacao = {}){
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: { id: id}}, transacao)
    }
    async updateRegistros(dadosAtualizados, where, transacao = {}){
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: {...where}}, transacao)
    }
    async deleteRegistro(id){

    }

}

module.exports = Services;