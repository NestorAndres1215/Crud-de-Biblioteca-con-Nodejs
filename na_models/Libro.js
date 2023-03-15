const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const libroSchema= new Schema({
        idLibro:String,
        titulo:String,
        idEditorial:String,
        idAutor:String
       
},{versionKey:false});
module.exports=mongoose.model('libros',libroSchema);