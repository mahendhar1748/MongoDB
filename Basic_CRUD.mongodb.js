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

// *******************************************************************************************************

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

// --------------------------------------------------------
//        INSERTING DOCUMENTS INTO COLLECTION          ----
// --------------------------------------------------------

// Inserting one document
db.students.insert(
  {"Name":"Mahendhar",
   "Degree":"Bachelors",
   "Stream":"Elecrical Engineering",
   "CGPA":9.5
  }
);

// Inserting multiple documents at a time  --->  Docs must be array of documents
db.students.insertMany([
  {"Name":"Arjun","Degree":"Bachelors","Stream":"Elecrical Engineering","CGPA":8.9,"Comments":"Placed in Infosys"},
  {"Name":"Shravya","Degree":"Bachelors","Stream":"Chemical Engineering","CGPA":9.9,"Comments":"Placed in IVY"},
  {"Name":"Ruchitha","Degree":"Bachelors","Stream":"Computer science Engineering","CGPA":9.6,"Comments":"Placed in Infosys","Status":"Married,Canada"},
  {"Name":"Raviteja","Degree":"Bachelors","Stream":"Elecrical Engineering","CGPA":8.9,"Comments":"Govt Job","Salary":56000}
]);

// *******************************************************************************************************

// --------------------------------------------------------
//        UPDATING VALUES INTO DOCUMENTS               ----
// --------------------------------------------------------

/* updating is done by., (update, update one and update many ) methods */

// update

// Explanation ---> In Students collection, wherever you find Name = Mahendhar, then set mobile number,other data...
// update applies for only first finding
db.students.update(
  {"Name":"Mahendhar"},
  {
   $set:
     {"Mobile":8790771568,"Is Active":"Yes"}
  }
);

// update
db.students.update(
  {"Stream":"Elecrical Engineering"},
  {
   $set:
     {"Stream":"Electrical Engineering","Eligible for":"TSGENCO,TSTRANSCO,TSDICOM"}
  }
);


// Update Many

// Explanation ---> In Students collection, wherever you find Stream = Electrical, then it will insert,other data...
// updateMany applies for all matchable findings
db.students.updateMany(
  {"Stream":"Electrical Engineering"},
  {
   $set:
     {"Personal Choice":"Also Eligible for private Jobs"} 
  }
);

// *******************************************************************************************************

// --------------------------------------------------------
//        Reading / Retreiving Docs  from collections  ----
// --------------------------------------------------------

// find() is nothing but select statment in RDBMS

//find() ----> finds all the documents in a collection

db.students.find();

// findOne -----> finds first document

db.students.findOne();

// find(K:V)   ----> Finds document based on condition

db.students.find({"Stream":"Electrical Engineering"});

db.students.find({"CGPA":8.9});
// ---> If we pass condition., if it doesnt exists, it will show empty 

// -------------------------------------------
//      Replacing            ----------------
//--------------------------------------------

// findOneAndReplace({},{}) ----> finding based on condition and replace/update 

db.students.findOneAndReplace({"Name":"Raviteja"},{"Phone":9493911748});

// It will replace entire document with phone number

// findOneAndDelete({}) ----> Deleting based on Condition

db.students.findOneAndDelete({"Phone":9493911748});


// ***************************************************************************************************

// ------------------------------------
//         DELETING DOCS          -----
// ------------------------------------

db.students.find();
// deleteOne({}) ----> finds all docs in collection, based on condition it will delete 

// deleteMany({}) ----> will delete many docs at once
// when passed with empty curly brace - it will delete all documents in collection

db.students.deleteOne({"Name":"Shravya"});



























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
