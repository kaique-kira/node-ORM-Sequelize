const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPessoas);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.post('/pessoas/', PessoaController.createPessoas);
router.put('/pessoas/:id', PessoaController.updatePessoas);
router.delete('/pessoas/:id', PessoaController.deletePessoas);


module.exports = router;