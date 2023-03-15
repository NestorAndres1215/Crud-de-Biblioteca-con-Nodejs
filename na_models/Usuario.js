const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usuarioSchema= new Schema({
        idUsuario:String,
        nombre:String,
        email:String,
        password:String
       
},{versionKey:false});
module.exports=mongoose.model('usuarios',usuarioSchema);