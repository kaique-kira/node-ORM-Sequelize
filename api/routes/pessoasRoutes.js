const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPessoas);
router.get('/pessoas/ativas', PessoaController.getAllPessoasAtivas);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getMatricula);
router.get('/pessoas/:estudanteId/matricula', PessoaController.getMatriculas);
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.getMatriculasPorTurma);
router.get('/pessoas/matricula/lotada', PessoaController.getTurmasLotadas);
router.post('/pessoas/', PessoaController.createPessoas);
router.post('/pessoas/:id/restore', PessoaController.restorePessoa);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restoreMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelPessoa);
router.put('/pessoas/:id', PessoaController.updatePessoas);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula);
router.delete('/pessoas/:id', PessoaController.deletePessoas);


module.exports = router;