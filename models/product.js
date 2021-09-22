const mongoose = require('../database');
const schema = new mongoose.Schema({
    carro:'string', 
    marca: 'string'
})
const carModel = mongoose.model('car',schema);

/*
const Schema = new mongoose.Schema({ 
    carro:{
        type: string,
        require: true
    },
    
    marca: {
        type: string,
        require: true
        }
    
     });
const ObjectId = Schema.ObjectId;


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
    }
});
*/

module.export = carModel