module.exports = ( application ) => {
    application.get( '/aldeoes', ( req, res ) => {
        res.render('aldeoes')
    })
}