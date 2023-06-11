const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const actions = require('./databaseAction.js');

const app = express();
app.set('port', process.env.PORT || 3000);

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
    res.send('Express server')
})

app.post('/auth', (req, res, next) => {
    const clientData = req.body;
    res.send({Server_response: clientData})
})

app.post('/register', (req, res, next) => {
    const clientData = req.body;
    actions.createUser('default', '', clientData.login, clientData.password);
    res.send({Server_response: clientData})
})


app.listen(app.get('port'), () => {
    console.log(`Express Server has been started on: http://localhost:${app.get('port')}`);
})
