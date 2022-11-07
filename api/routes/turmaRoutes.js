const {Router} = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turma', TurmaController.getAllTurma);
router.get('/turma/:id', TurmaController.getTurma);
router.post('/turma/', TurmaController.createTurma);
router.put('/turma/:id', TurmaController.updateTurma);
router.delete('/turma/:id', TurmaController.deleteTurma);


module.exports = router;