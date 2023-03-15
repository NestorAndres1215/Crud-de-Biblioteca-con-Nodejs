const Autor =require ('../na_models/Autor')
//metodo listar datos
module.exports.listar = (req, res) => {
    Autor.find({}, (error, autores) => {
        if (error) {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        console.log(autores)
        return res.render('autor', { autores: autores })
    })
}
//metodo para registrar datos 
module.exports.insertar= (req, res) =>
{
    const autor = new Autor ({
     
        idAutor: req.body.aut,
        nombre: req.body.nom,
        apellido: req.body.ape,
        pais: req.body.pa,
       
    })
    autor.save(function(error, autor)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/autor')
    })
}
//metodo de editar
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const idAutor = req.body.e_aut;
    const nombre = req.body.e_nom;
    const apellido =req.body.e_ape;
    const pais =req.body.e_pa;


    Autor.findByIdAndUpdate(id, {idAutor, nombre,apellido,pais}, (error,Autor) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/autor')
    })
   
} 
// metodo eliminar
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    Autor.findByIdAndRemove(id,(error,autor) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/autor')
    })
}
