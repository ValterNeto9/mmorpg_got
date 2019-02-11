module.exports.jogo = ( application, req, res ) => {
    
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    
    const msg = req.query.msg !== '' ? req.query.msg : ''
    
    const usuario = req.session.user
    
    const connection = application.config.dbConnection
    const JogoDAO = new application.app.models.JogoDAO( connection )
    
    JogoDAO.iniciarJogo( res, usuario, msg )
}

module.exports.sair = ( application, req, res ) => {
    
    req.session.destroy( ( err ) => {
        if ( err ) return res.send( 'erro ao sair: ', err)
        res.render( 'index', { errors: {} } )
    })
    
}

module.exports.suditos = ( application, req, res ) => {
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    res.render( 'aldeoes' )
}

module.exports.pergaminhos = ( application, req, res ) => {
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    res.render( 'pergaminhos' )
}

module.exports.executar_acao_sudito = ( application, req, res ) => {
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    
    const dadosForm = req.body
    
    req.assert('acao', 'Ação deve ser preenchida').notEmpty()
    req.assert('quantidade', 'Quatidade deve ser preenchida').notEmpty()
    
    const errors = req.validationErrors()
    
    if ( errors.length > 0 ) {
        res.redirect('jogo?msg=A')
        return
    }
    
    const connection  = application.config.dbConnection
    const JogoDAO = new application.app.models.JogoDAO( connection )
    
    dadosForm.usuario = req.session.user.usuario
    
    JogoDAO.acao( res, dadosForm )
    
}