const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const editorialSchema= new Schema({
        idEditorial:String,
        editorial:String
       
},{versionKey:false});
module.exports=mongoose.model('editoriales',editorialSchema);