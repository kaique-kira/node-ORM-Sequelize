const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPessoas);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getMatricula);
router.post('/pessoas/', PessoaController.createPessoas);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.put('/pessoas/:id', PessoaController.updatePessoas);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula);
router.delete('/pessoas/:id', PessoaController.deletePessoas);


module.exports = router;