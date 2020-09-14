const Atendimentos = require('../models/atendimentos');

module.exports = (app) => {
    app.get('/atendimentos', (req, res) => {
        res.send('você está na rota de atendimentos e está realizando um GET');
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        res.send('Você está rota de  atendimentos e está realizando um POST');

        const atendimentos = new Atendimentos();

        atendimentos.create(atendimento);

    });

}