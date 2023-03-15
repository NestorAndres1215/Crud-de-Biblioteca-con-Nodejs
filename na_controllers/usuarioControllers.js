const  Usuario =require ('../na_models/Usuario')
//metodo para registrar datos 
module.exports.insertar= (req, res) =>
{
    const usuario = new Usuario ({
     
        
        nombre: req.body.nom,
        email: req.body.email,
        password: req.body.pass,
       
    })
    usuario.save(function(error, autor)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        console.log(usuario)
        res.redirect('/login')
    })
}