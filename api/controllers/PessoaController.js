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

    static async getPessoa(req, res) {
        const {id} = req.params;
        try{
            const getOnePessoa = await database.Pessoas.findOne({where: {id:Number(id)}});
            return res.status(200).json(getOnePessoa);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createPessoas(req, res) {
        const newPessoa = req.body;
        try {
            const newPessoaCreate = await database.Pessoas.create(newPessoa);
            return res.status(200).json(newPessoaCreate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePessoas(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.Pessoas.update(newInfo, {where: {id: Number(id)}});
            const pessoaUpdate = await database.Pessoas.findOne({where: {id:Number(id)}});
            return res.status(200).json(pessoaUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

        static async deletePessoas(req, res){
            const {id} = req.params;
            try {
                await database.Pessoas.destroy({where: {id: Number(id)}});
                return res.status(200).json({mensagem: `id ${id} deleted`})                
            } catch (error) {
                return res.status(500).json(error.message);
                
            }
        }

}

module.exports = PessoaController;