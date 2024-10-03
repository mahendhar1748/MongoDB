/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


// Showing data bases

// * show databases;
db.getMongo().getDBs();

// ---------------------------------------------------------------

const database = 'test';
const collection = 'NEW_COLLECTION_NAME';

// --------------------------------------------
//         CREATING DATABASE                 --
// --------------------------------------------

// * use test;

use ('test');
// ----> if data bases is there it will use that data base
// ----> if data base is not there, it will create the database
// --> the moment when we insert something., then only we can see that database

// to know which database is in use
db;

// --------------------------------------------
//         DROPPING DATABASE                 --
// --------------------------------------------

db.dropDatabase;  // it will drop the current holded database

// --------------------------------------------
//        CREATING COLLECTION                --
// --------------------------------------------

// Create a new collection.
db.createCollection("students");

// Create a new collection.
db.createCollection("Items");

// --------------------------------------------
//        Dropping COLLECTION                --
// --------------------------------------------

// dropping perticular collection
db.Items.drop();







// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
