const {Router} = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/nivel', NivelController.getAllNivel);
router.get('/nivel/:id', NivelController.getNivel);
router.post('/nivel/', NivelController.createNivel);
router.put('/nivel/:id', NivelController.updateNivel);
router.delete('/nivel/:id', NivelController.deleteNivel); 


module.exports = router;