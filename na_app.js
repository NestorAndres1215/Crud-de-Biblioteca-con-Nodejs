const express = require('express');
const app = express();

const db= require('./na_db');
app.set('view engine', 'ejs');
app.set('views','./na_views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('na_public'));
const libros=require('./na_routes/libro');
app.use(libros);
const editoriales=require('./na_routes/editorial');
app.use(editoriales);
const autores=require('./na_routes/autor');
app.use(autores);
const login=require('./na_routes/usuario');
app.use(login);

app.listen(5001, ()=>
{
    console.log('Puerto del servidor es el http://localhost:5001');
});
