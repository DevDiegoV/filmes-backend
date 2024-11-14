const filmeModel = require('../models/filmeModel');

async function criarFilme(req, res) {
  try {
    const novoFilme = await filmeModel.addFilme(req.body);
    res.status(201).json(novoFilme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function listarFilmes(req, res) {
  try {
    const filmes = await filmeModel.getFilmes();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function buscarFilmePorId(req, res) {
  try {
    const filme = await filmeModel.getFilmeById(req.params.id);
    res.status(200).json(filme);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function atualizarFilme(req, res) {
  try {
    const filmeAtualizado = await filmeModel.updateFilme(req.params.id, req.body);
    res.status(200).json(filmeAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deletarFilme(req, res) {
  try {
    await filmeModel.deleteFilme(req.params.id);
    res.status(200).json({ message: 'Filme deletado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { criarFilme, listarFilmes, buscarFilmePorId, atualizarFilme, deletarFilme };
