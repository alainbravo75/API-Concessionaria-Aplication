const mongoose = require('../database');

const schema = new mongoose.Schema({
  
    marca:{
        type: 'string',
        required: true
    },
    


    modelo: {
        type: 'string',
        required: true
        },
        descricao: {
            type: 'string',
            required: true
        },
        cor: {
            type: 'string',
            required: true
        }
    
     });

const productModel = mongoose.model('productos',schema);

module.exports = productModel