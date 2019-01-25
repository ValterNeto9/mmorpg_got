function JogoDAO ( connection ) {
    this._connection = connection
}

JogoDAO.prototype.gerarParametros = function ( usuario, res ) {
     
     const jogo = {
         usuario: usuario
         , moeda: 30
         , suditos: 10
         , temor: Math.floor( Math.random() * 1000 )
         , magia: Math.floor( Math.random() * 1000 )
         , sabedoria: Math.floor( Math.random() * 1000 )
         , comercio: Math.floor( Math.random() * 1000 )
     }
     
     const dados = {
        operacao: "inserir",
        registro: jogo,
        collection: "jogo",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
             res.render( 'index', { errors: {} } )
        }
    }
    
    this._connection( dados )
}

JogoDAO.prototype.iniciarJogo = function ( res, _usuario ) {
     
     const dados = {
        operacao: "buscar",
        registro: _usuario.usuario,
        collection: "jogo",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
            console.log('Iniciando o Jogo com:', result[0])
            res.render( 'jogo', { img_casa: _usuario.casa, jogo: result[0] } )
        }
    }
    
    this._connection( dados )
}

module.exports = () => JogoDAO