const database = require('../models')

class NivelController {
    static async getAllNivel(req, res){
        try{
            const getAll = await database.Niveis.findAll();
            return res.status(200).json(getAll);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    
    }

    static async getNivel(req, res) {
        const {id} = req.params;
        try{
            const getOneNivel = await database.Niveis.findOne({where: {id:Number(id)}});
            return res.status(200).json(getOneNivel);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createNivel(req, res) {
        const newNivel = req.body;
        try {
            const newNivelCreate = await database.Niveis.create(newNivel);
            return res.status(200).json(newNivelCreate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateNivel(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.Niveis.update(newInfo, {where: {id: Number(id)}});
            const nivelUpdate = await database.Niveis.findOne({where: {id:Number(id)}});
            return res.status(200).json(nivelUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

        static async deleteNivel(req, res){
            const {id} = req.params;
            try {
                await database.Niveis.destroy({where: {id: Number(id)}});
                return res.status(200).json({mensagem: `id ${id} deleted`})                
            } catch (error) {
                return res.status(500).json(error.message);
                
            }
        }

        static async restoreNiveis(req, res){
            const {id} = req.params;
            try {
                await database.Niveis.restore({where: {id: Number(id)}});
                return res.status(200).json({mensagem: `id ${id} restored`});
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

}

module.exports = NivelController;