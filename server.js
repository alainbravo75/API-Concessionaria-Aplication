const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const app = express();
//conectar mongoose com express
mongoose.connect('mongodb://localhost/carros'), {
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

app.listen(8081, () => {
    console.log('Server running')
})











console.log('ola mundo')