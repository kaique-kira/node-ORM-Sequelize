const database = require('../models')

class TurmaController {
    static async getAllTurma(req, res){
        try{
            const getAll = await database.Turmas.findAll();
            return res.status(200).json(getAll);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    
    }

    static async getTurma(req, res) {
        const {id} = req.params;
        try{
            const getOneTurma = await database.Turmas.findOne({where: {id:Number(id)}});
            return res.status(200).json(getOneTurma);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createTurma(req, res) {
        const newTurma = req.body;
        try {
            const newTurmaCreate = await database.Turmas.create(newTurma);
            return res.status(200).json(newTurmaCreate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateTurma(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.Turmas.update(newInfo, {where: {id: Number(id)}});
            const turmaUpdate = await database.Turmas.findOne({where: {id:Number(id)}});
            return res.status(200).json(turmaUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

        static async deleteTurma(req, res){
            const {id} = req.params;
            try {
                await database.Turmas.destroy({where: {id: Number(id)}});
                return res.status(200).json({mensagem: `id ${id} deleted`})                
            } catch (error) {
                return res.status(500).json(error.message);
                
            }
        }

        static async restoreTurma(req, res){
            const {id} = req.params;
            try {
                await database.Turmas.restore({where: {id: Number(id)}});
                return res.status(200).json({mensagem: `id ${id} restored`});
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

}

module.exports = TurmaController;