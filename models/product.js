const mongoose = require('../database');

const productSchema = new mongoose.Schema({
    carro:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    modelo: {String,
    require: true
    },
    ano: {
        type: new Date,
        require: true
    },
    cor: {
        type: String,
        require: true
    },
    preco:{
        type: real,
        require: true
    },
    quantidade: {number,
    require: true
    },
})