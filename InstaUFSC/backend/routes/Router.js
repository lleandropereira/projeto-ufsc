const express = require('express');
const router = express();

//aqui já estamos definindo o prefixo api para as rotas de usuário
router.use('/api/users', require('./UserRoutes'));
router.use('api/photos', require('./PhotoRoutes'));

//test route
router.get('/', (req, res) => {
    res.send('API funcionando!');
});

module.exports = router;