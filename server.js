const express = require('express');
const mongoose = require('mongoose');
const product = require('./models/product')

require('dotenv').config();

const bodyParser = require('body-parser');

const urlDB = process.env.MONGODB_URL
console.log(urlDB);

const app = express();
//conectar mongoose com express
mongoose.connect(urlDB), {
    useUnifieldTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database');
//para entender quando enviamos informação de requisição com json
app.use(bodyParser.json());
//para decodar parametros url 
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.send('ok')

    .create({carro: "Chevrolet", modelo: "Onix"})
});

app.get('/new', (req, res) => {
    product.insertOne({carro: 'Toyota', modelo:'Hiace'})
});

app.listen(8081, () => {
    console.log('Server running')
})











console.log('ola mundo')