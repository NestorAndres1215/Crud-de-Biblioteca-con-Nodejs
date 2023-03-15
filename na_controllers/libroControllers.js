const Libro=require('../na_models/Libro')

//metodo listar datos
module.exports.listar = (req, res) => {
    Libro.find({}, (error, libros) => {
        if (error) {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        console.log(libros)
        return res.render('libro', { libros: libros })
    })
}
//metodo para registrar datos 
module.exports.insertar = (req, res) =>
{
    const libro = new Libro ({
        idLibro: req.body.cod,
        titulo: req.body.ti,
        idEditorial: req.body.edi,
        idAutor: req.body.au,
       
    })
    libro.save(function(error, libro)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/libro')
    })
} 
//metodo de editar
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const idLibro = req.body.e_cod;
    const titulo = req.body.e_ti;
    const idEditorial = req.body.e_edi;
    const idAutor = req.body.e_au;
    
    Libro.findByIdAndUpdate(id, {idLibro, titulo, idEditorial,idAutor,}, (error,libro) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/libro')
    })
}

// metodo eliminar
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    Libro.findByIdAndRemove(id,(error,libro) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/libro')
    })
}

