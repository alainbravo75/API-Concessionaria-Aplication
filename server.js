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
   // productCar.create({carro: 'YUNDAI', descricao: 'Novo carro', modelo: 'Yaris', ano: (2021, 05 , 15), cor: "verde", preco: 23.500, quantidade: 5 })
});

//Cadastrando um produto
app.get('/', async (req, res) => {
    res.json({car})
});

//rota POST
app.post('/product', async (req, res) => {
    
    const {carro, modelo, descricao, ano, cor, preco, quantidade, carImage} = req.body;
    const car = {
        carro,
        modelo,
        descricao,
        ano,
        cor,
        preco,
        quantidade,
        carImage
    }
    try {
            const newProduct = await productCar.create(car)
            return res.status(200).send(newProduct)
            } catch(err) {
                return res.status(400).json(err)
            }
        }),

        //Listar todos os carros cadastrados com requisição GET

        app.get('/products', async(req, res) => {
            try {
                const listProduct = await productCar.find(req.body)
                return res.status(200).json(listProduct)
            } catch(err) {
                return res.status(40).json(err)
            }
        });

        //listar um carro específico com id
        app.get('/product/:product_id', async(req, res) => {
            try {
                const product_id = await productCar.findById(req.body)
                return res.status(200).json(product_id)
            } catch(err) {
                return res.status(400).send(err)
            }
        });
    
  
app.listen(port, () => {
    console.log('Server running')
})
