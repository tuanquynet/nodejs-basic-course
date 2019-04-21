```javascript
// refer to a collection (it may or may not exist):
db.collectionName;
db.getCollection('collectionName');

// insert one document
db.collectionName.insertOne(/* Object */);
// insert many documents
db.collectionName.insertMany(/*[ Array of Objects ]*/);

// find all documents that match a query
db.collectionName.find(/* { query object } */);
// find first document match a query
db.collectionName.findOne(/* { query object } */);

// remove collection completely
db.collectionName.drop();
// remove database completely
db.dropDatabase();
```