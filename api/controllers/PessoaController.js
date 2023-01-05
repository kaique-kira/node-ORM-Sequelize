// const database = require('../models');
// const Sequelize = require('sequelize');

const {PessoasServices} = require('../services');
const pessoasServices = new PessoasServices();
class PessoaController {    
    static async getAllPessoasAtivas(req, res) {
        try {
            const getAllAtivas = await pessoasServices.getRegistroAtivo();
            return res.status(200).json(getAllAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getAllPessoas(req, res) {
        try {
            const getAll = pessoasServices.getAllRegistros();
            return res.status(200).json(getAll);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPessoa(req, res) {
        const { id } = req.params;
        try {
            const getOnePessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(getOnePessoa);
        } catch (error) {
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
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Pessoas.update(newInfo, { where: { id: Number(id) } });
            const pessoaUpdate = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoaUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePessoas(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deleted` })
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async getMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const getOneMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(getOneMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params;
        const newMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const newMatriculaCreate = await database.Matriculas.create(newMatricula);
            return res.status(200).json(newMatriculaCreate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const newInfo = req.body;
        try {
            await database.Matriculas.update(newInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const matriculaUpdate = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } });
            return res.status(200).json(matriculaUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
            return res.status(200).json({ mensagem: `id ${matriculaId} deleted` })
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async restorePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} restored` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId) } });
            const matriculas = await pessoa.getAulasMatriculas();
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {

            const getAllMatriculas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 5,
                order: [['estudante_id', 'DESC']]
            })
            return res.status(200).json(getAllMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getTurmasLotadas(req, res) {
        const lotacaoTurma = 2;
        try {
            const TurmasLotadas = await database.Matriculas.findAndCountAll(
                {where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            });
            return res.status(200).json(TurmasLotadas.count);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cancelPessoa(req, res) {
        const {estudanteId} = req.params;
        try {
                await pessoasServices.cancelPessoasAndMatriculas(Number(estudanteId));
                return res.status(200).json(`Matriculas referente ao estudante ${estudanteId} canceladas.`);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = PessoaController;