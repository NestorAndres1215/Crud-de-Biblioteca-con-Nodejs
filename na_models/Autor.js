const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const autorSchema= new Schema({
        idAutor:String,
        nombre:String,
        apellido:String,
        pais:String
       
},{versionKey:false});
module.exports=mongoose.model('autores',autorSchema);