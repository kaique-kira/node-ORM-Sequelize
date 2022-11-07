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

        static async getMatricula(req, res) {
            const {estudanteId, matriculaId} = req.params;
            try{
                const getOneMatricula = await database.Matriculas.findOne({where: {
                    id: Number(matriculaId),
                     estudante_id: Number(estudanteId)}});
                return res.status(200).json(getOneMatricula);
            } catch(error){
                return res.status(500).json(error.message);
            }
        }

        static async createMatricula(req, res) {
            const {estudanteId} = req.params;
            const newMatricula = {...req.body, estudante_id: Number(estudanteId)};
            try {
                const newMatriculaCreate = await database.Matriculas.create(newMatricula);
                return res.status(200).json(newMatriculaCreate);
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

        static async updateMatricula(req, res) {
            const {estudanteId, matriculaId} = req.params;
            const newInfo = req.body;
            try {
                await database.Matriculas.update(newInfo, {where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }});
                const matriculaUpdate = await database.Matriculas.findOne({where: {id:Number(matriculaId)}});
                return res.status(200).json(matriculaUpdate);
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

        static async deleteMatricula(req, res){
            const {estudanteId, matriculaId} = req.params;
            try {
                await database.Matriculas.destroy({where: {id: Number(matriculaId)}});
                return res.status(200).json({mensagem: `id ${matriculaId} deleted`})                
            } catch (error) {
                return res.status(500).json(error.message);
                
            }
        }
    

}

module.exports = PessoaController;