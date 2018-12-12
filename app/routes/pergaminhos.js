module.exports = ( application ) => {
    application.get( '/pergaminhos', ( req, res ) => {
        res.render('pergaminhos')
    })
}