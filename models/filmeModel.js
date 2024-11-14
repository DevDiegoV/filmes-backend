const supabase = require('../services/supabaseClient');

// Função para adicionar um filme
async function addFilme(filme) {
  const { data, error } = await supabase
    .from('Filmes')
    .insert([filme]);
  if (error) throw error;
  return data;
}

// Função para listar todos os filmes
async function getFilmes() {
  const { data, error } = await supabase
    .from('Filmes')
    .select('*');
  if (error) throw error;
  return data;
}

// Função para buscar um filme por ID
async function getFilmeById(id) {
  const { data, error } = await supabase
    .from('Filmes')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

// Função para atualizar um filme por ID
async function updateFilme(id, filme) {
  const { data, error } = await supabase
    .from('Filmes')
    .update(filme)
    .eq('id', id);
  if (error) throw error;
  return data;
}

// Função para deletar um filme por ID
async function deleteFilme(id) {
  const { data, error } = await supabase
    .from('Filmes')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
}

module.exports = { addFilme, getFilmes, getFilmeById, updateFilme, deleteFilme };
