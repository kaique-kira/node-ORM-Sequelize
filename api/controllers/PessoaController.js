const database = require('../models')

class PessoaController {
    static async getAllPessoas(req, res){
        try{
            const getAll = await database.Pessoas.findAll();
            return res.status(200).json(getAll);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    
    }


}

module.exports = PessoaController;