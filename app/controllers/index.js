module.exports.index = ( application, req, res ) => {
    res.render( 'index', { errors: {} } )
}

module.exports.autenticar = ( application, req, res ) => {
    //res.render( 'Autenticação do index' )
    
    const dados = req.body;
    
    req.assert('usuario', 'Usuário não pode ser vazio!').notEmpty()
    req.assert('senha', 'Senha não pode ser vazia!').notEmpty()
    
    const errors = req.validationErrors();
    
    if ( errors.length > 0 ) {
        res.render('index', { errors: errors } )
        return
    }
    
    res.send('tudo ok para autenticar')
}