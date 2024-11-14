const express = require('express');
const filmeController = require('../controllers/filmeController');

const router = express.Router();

router.post('/filmes', filmeController.criarFilme);
router.get('/filmes', filmeController.listarFilmes);
router.get('/filmes/:id', filmeController.buscarFilmePorId);
router.put('/filmes/:id', filmeController.atualizarFilme);
router.delete('/filmes/:id', filmeController.deletarFilme);

module.exports = router;
