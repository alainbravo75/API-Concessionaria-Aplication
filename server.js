const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productCar = require('./models/product')

require('dotenv').config();

const port = 8081;

//chamando o j.son na requisições
app.use(express.json());


const bodyParser = require('body-parser');

const urlDB = process.env.MONGODB_URL

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
    //productCar.create({carro: 'TOYOTA', descricao: 'Novo carro', modelo: 'Yaris', ano: (2021, 05 , 15), cor: "verde", preco: 23.500, quantidade: 5 })
});

//Cadastrando um produto
app.get('/product', (req, res) => {
    res.send('Requisição POST foi chamada')
});


app.post('/product', (req, res) => {
    const {carro, descricao, modelo, ano, cor, preco, quantidade} = req.body;
    
    const car = {
        carro,
        descricao,
        modelo,
        ano,
        cor,
        preco,
        quantidade
    }
    
    productCar.insertMany(productCar)
    console.log(req.body)
   // res.send(product)
   res.json({car})
});

//Rota de PUT
app.get('/product/:productId', (req, res) => {
    res.send('A requisição PUT foi chamada')
})
app.put('/product/:productId', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: "Produto atualizado com sucesso!"})
})

app.listen(port, () => {
    console.log('Server running')
})
