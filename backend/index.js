const express = require('express');
const app = express();
const professoresRoutes = require('./routes/professores');
const cursosRoutes = require('./routes/cursos');

app.use(express.json());
app.use('/professores', professoresRoutes);
app.use('/cursos', cursosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});