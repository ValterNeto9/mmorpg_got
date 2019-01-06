function UsuariosDAO ( connection ) {
    console.log( 'Model Usuarios' )
    this._connection = connection()
    console.log( 'Conexão executada', this._connection )
}

UsuariosDAO.prototype.inserirUsuario = ( usuario, res ) => {
     
     const dados = {
        operacao: "inserir",
        usuario: usuario,
        collection: "usuarios",
        callback: ( err, result ) => {
            if ( err ) throw new Error( err )
            res.send( "insert OK" )
        }
    }
    
    this._connection( dados )
}

module.exports = () => UsuariosDAO