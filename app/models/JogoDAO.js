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
        registro: usuario,
        collection: "jogo",
        callback: ( err, result ) => {
            if ( err ) return res.send( err )
             res.status(200).json({mesage:'Inserido com sucesso!'})
        }
    }
    
    this._connection( dados )
}

module.exports = () => JogoDAO