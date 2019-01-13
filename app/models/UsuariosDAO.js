function UsuariosDAO ( connection ) {
    this._connection = connection
}

UsuariosDAO.prototype.inserirUsuario = function ( usuario, res ) {
     
     const dados = {
        operacao: "inserir",
        usuario: usuario,
        collection: "usuarios",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
             res.status(200).json({mesage:'Inserido com sucesso!'})
        }
    }
    
    this._connection( dados )
}

module.exports = () => UsuariosDAO