const mongo = require("mongodb").MongoClient
const assert = require("assert")

const dbName = "got"
const url = `mongodb://${ process.env.IP }:27017/${ dbName }`

const connMongoDB = function ( dados ) {
    mongo.connect(url,
    { useNewUrlParser: true },
    function(err, client) {
        assert.equal(null, err)
        console.log("Connected successfully to server")
        const db = client.db( dbName )
        query( db, dados )
        client.close()
    });
};

function query( _db, dados ) {
    var collection = _db.collection( dados.collection );
    switch ( dados.operacao ) {
        case "inserir":
            collection.insertOne( dados.usuario, dados.callback );
            break;
        default:
            break;
    }
}
module.exports = () => connMongoDB
