function UsuariosDAO ( connection ) {
    this._connection = connection
}

UsuariosDAO.prototype.inserirUsuario = function ( usuario, res ) {
     
     const dados = {
        operacao: "inserir",
        registro: usuario,
        collection: "usuarios",
        callback: ( err, result ) => {
            console.log('Resultado Insert:', result)
            if ( err ) return res.send( err )
             console.log({mesage:'Inserido com sucesso!'})
        }
    }
    
    this._connection( dados )
}

UsuariosDAO.prototype.autenticar = function ( usuario, req, res ) {
     
     const dados = {
        operacao: "buscar",
        usuario: usuario,
        collection: "usuarios",
        callback: ( err, result ) => {
            
            if ( err ) return res.send( err )
            
            if ( !result. length ) {
                res.render('index', { errors: {} } )
                return
            }
            
            req.session.autenticado = true
            req.session.user = result[0]
            
            res.redirect('jogo')
            
        }
    }
    
    this._connection( dados )
}

module.exports = () => UsuariosDAO