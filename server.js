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
    try {
            const newProduct = await productCar.create(car)
            return res.status(200).send(newProduct)
            } catch(err) {
                return res.status(400).send(err)
            }
        }),

        //Requisição GET para lista todos produtos

        app.get('/product/:product_id', async(req, res) => {
            try {
                const listProduct = await productCar.findById(car)
                return res. status(200).send(listProduct)
            } catch(err) {
                return res.status(400).send(err)
            }
        });

        //metodos provisórios
    /*
        async updateProduct(req, res) {
    
            try {
    
            } catch(err) {
                return res.status(400).send(err)
            }
        },
         async deleteProduct(req, res) {
    
            try {} catch(err) {
                return res.status(400).send(err)
            }
         },
         async getProductById(req, res) {
    
            try {} catch(err) {
                return res.status(400).send(err)
            }
         }

         */
   // productCar.create(productCar)
  //  console.log(req.body)
    
   // res.send(product)
  // res.json({car})
//});




//Rota de PUT
/*
app.get('/product/:productId', (req, res) => {
    res.send('A requisição PUT foi chamada')
})
app.put('/product/:productId', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: "Produto atualizado com sucesso!"})
})
*/
app.listen(port, () => {
    console.log('Server running')
})
