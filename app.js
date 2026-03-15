const express = require('express');
const app = express();
const logger = require('./src/utils/logger.js');
const userRoutes = require('./src/routes/user.routes.js');

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando e monitorando na porta 3000');
});
