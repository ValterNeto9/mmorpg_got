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

JogoDAO.prototype.iniciarJogo = function ( res, _usuario, msg ) {
     
     const dados = {
        operacao: "buscar",
        registro: _usuario.usuario,
        collection: "jogo",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
            console.log('Iniciando o Jogo com:', result[0])
            res.render( 'jogo', { 
                                    img_casa: _usuario.casa
                                    , jogo: result[0]
                                    , msg: msg
                                })
        }
    }
    
    this._connection( dados )
}

JogoDAO.prototype.acao = function ( res, _acao ) {
    
    const data = new Date()
    
    const acoes = {
        '1': 1,
        '2': 2,
        '3': 5,
        '4': 5
    }
    _acao.tempoFinal = getHoursMillisecond( acoes[ _acao.acao ] ) + data.getTime()
    
    const dados = {
        operacao: "inserir",
        registro: _acao,
        collection: "acoes",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
             res.redirect( 'jogo?msg=B' )
        }
    }
    
    this._connection( dados )    
}

const getHoursMillisecond = ( hour ) => {
    return hour * 60 * 60000;
}

module.exports = () => JogoDAO