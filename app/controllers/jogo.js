module.exports.jogo = ( application, req, res ) => {
    
    if ( !req.session.autenticado ) return res.send( 'Necessário efetuar o login.' )
    res.render( 'jogo', { img_casa: req.session.user.casa } )
}

module.exports.sair = ( application, req, res ) => {
    
    req.session.destroy( ( err ) => {
        if ( err ) return res.send( 'erro ao sair: ', err)
        res.render( 'index', { errors: {} } )
    })
    
}