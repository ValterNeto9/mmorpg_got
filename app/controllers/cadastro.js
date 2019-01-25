module.exports.cadastro = ( application, req, res ) => {
    res.render( 'cadastro', { errors: {}, formDados: {} } )
}

module.exports.cadastrar = ( application, req, res ) => {
    
    const formDados = req.body
    
    req.assert( 'nome', 'Nome não pode ser vazio.' ).notEmpty()
    req.assert( 'usuario', 'Usuário não pode ser vazio.' ).notEmpty()
    req.assert( 'senha', 'Senha não pode ser vazio.' ).notEmpty()
    req.assert( 'casa', 'Necessário selecionar uma Casa.' ).notEmpty()
    
    const erros = req.validationErrors()
    
    if ( erros.length > 0 ) {
        res.render( 'cadastro', { errors: erros, formDados: formDados } )
        return
    } 
    
    const connection = application.config.dbConnection
    const usuariosDAO = new application.app.models.UsuariosDAO( connection )
    const JogoDAO = new application.app.models.JogoDAO( connection )
    
    usuariosDAO.inserirUsuario( formDados, res )
    JogoDAO.gerarParametros( formDados.usuario, res )
    
    
}