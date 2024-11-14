require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Configuração de middlewares
app.use(express.json());

// Configura o CORS
app.use(cors({
  origin: 'http://localhost:5173' // Define o endereço do frontend React
}))

// Configuração de rotas
const filmeRoutes = require('./routes/filmeRoutes');
app.use('/', filmeRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});