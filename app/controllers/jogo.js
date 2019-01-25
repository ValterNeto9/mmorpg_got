module.exports.jogo = ( application, req, res ) => {
    
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    
    const usuario = req.session.user
    
    const connection = application.config.dbConnection
    const JogoDAO = new application.app.models.JogoDAO( connection )
    
    JogoDAO.iniciarJogo( res, usuario )
}

module.exports.sair = ( application, req, res ) => {
    
    req.session.destroy( ( err ) => {
        if ( err ) return res.send( 'erro ao sair: ', err)
        res.render( 'index', { errors: {} } )
    })
    
}