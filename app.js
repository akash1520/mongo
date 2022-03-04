const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url, {
    useNewUrlParser: true
});

client.connect(function (err) {
    assert.equal(null, err);
    console.log("connected successfully to server");

    const db = client.db(dbName);

    findDocument(db, function () {
        client.close();
    })

});

const insertDocuments = function (db, callback) {
    const collection = db.collection('fruits');
    collection.insertMany([{
            name: "apple",
            score: 10,
            review: "the best apppe I have eaten in my life"
        },
        {
            name: "banana",
            score: 8,
            review: "sweet af"
        },
        {
            name: "graps",
            score: 6,
            review: "little sour but good"
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.insertedCount);
        assert.equal(3, Object.keys(result.insertedIds).length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });

};
const findDocument = function (db, callback) {
const collection =  db.collection('fruits');
    collection.find({}).toArray(function(err,fruits){
    assert.equal(err,null);
    console.log("found the following record");
    console.log(fruits);
    callback(fruits);
});
}