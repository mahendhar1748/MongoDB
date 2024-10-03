// Aggregation is very similar to Find command
// Whatever we can do with find., we can do with aggreagate

/*
where we can provide the criteria for query in the for mof JSON documents
the key element in aggragation is called pipeline(pipeline is nothing but sequence of data aggregation operations or stages)
it also helps us in performing few operations like min,max,sum

syntax

db.students.aggreagate(pipeline,options)

*/

// ******************************Sorting Docs in ascending order*************************
// 1 --> Ascending , -1 ---> Descending

var pipeline = [
    {$sort:{"Name":1}}
];
db.students.aggregate(pipeline);

// ***************************** USING LIMIT KEY WORD ************************************

var pipeline2 = [
    {$sort:{"Name":1}},
    {$limit:3}
];
db.students.aggregate(pipeline2);

// --> Projecting only 3 docs

// ***************************** USING Grouping************************************
/*
var pipeline3 = [
    {$group:{"_id":"$Stream"}}
    {$sum:{"Salary":1}},
   ];
db.students.aggregate(pipeline3);
*/

// *************************** SKIP and LIMIT ****************************************

// Skip ---> Skip will always skips Sequentially not random or advoc

// Getting first 3 records
db.students.find().limit(3);

// Vomiting first 2 records
db.students.find().skip(2);

// ******************************** SORTING *********************************************

/* we will need to sort the records set before passing it into next logical operation

db.collection.find().sort({"Name":1})

*/
// Ascending based on Name
db.students.find().sort({"Name":1});

// Descending based on Name
db.students.find().sort({"Name":-1});

/*
*****************************************************************************************************************
********************************    INDEXES ********************************************************************
****************************************************************************************************************/

// Indexing in mongodb is the process of creating an index on a field in a collection to improve performance
// Indexes are the fastest way to find information
// --> Relate it to index page in your book

// By default - every collection will have an index on "_id" Key

/*

db.students.ensureIndex("Name":1)

*/

db.students.ensureIndex({"Name":1});

// *******************************************************************************************
// ******************************* BACKUP and RESTORE **************************************
// ******************************************************************************************

// First create a folder where you want to save your Data
// Next, Run the command "mongorestore.exe"
// verify the data dump and folder dumped correctly
