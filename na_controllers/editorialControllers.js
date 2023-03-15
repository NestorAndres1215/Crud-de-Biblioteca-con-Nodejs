const Editorial =require ('../na_models/Editorial')
//metodo listar datos
module.exports.listar = (req, res) => {
    Editorial.find({}, (error, editoriales) => {
        if (error) {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        console.log(editoriales)
        return res.render('editorial', { editoriales: editoriales })
    })
}
//metodo para registrar datos 
module.exports.insertar= (req, res) =>
{
    const editorial = new Editorial ({
     
        idEditorial: req.body.codi,
        editorial: req.body.edit,
       
    })
    editorial.save(function(error, editorial)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/editorial')
    })
}
//metodo de editar
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const idEditorial = req.body.e_edi;
    const editorial = req.body.e_edit;


    Editorial.findByIdAndUpdate(id, {idEditorial, editorial}, (error,editorial) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/editorial')
    })
   
} 
// metodo eliminar
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    Editorial.findByIdAndRemove(id,(error,editorial) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/editorial')
    })
}
