const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productCar = require('./models/product')
require('dotenv').config();

const port = 8081;

const bodyParser = require('body-parser');

//conectar mongoose com express
mongoose.connect('mongodb+srv://projetocarro:carro@cluster0.7ataw.mongodb.net/databaseconcessionaria?retryWrites=true&w=majority'), {
    useUnifieldTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database');
//para entender quando enviamos informação de requisição com json
app.use(bodyParser.json());
//para decodar parametros url 
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.send('ok')
})

app.listen(port, () => {
    console.log('Server running')
})











console.log('ola mundo')