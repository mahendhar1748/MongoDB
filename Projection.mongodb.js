
/*
Projection is nothing but another name of selecting fields, hiding some other fields

- we need to Specify the field as "1" OR "0"
- By using projection our Size of the doc reduced

*/ 

// Syntax
/*
find({},{"Tax":1,"_id":0})
 -> Mongodb -> get all document
   --> All matches Document
    ---> Extract the Keys that we asked for
      --> This result set is extracted and projected
*/


db.students.find();

// To Know how many streams in Study for each Student

db.students.find({},{"Stream":1});

// the output of above command gives id and stream but id dont need id. 

db.students.find({},{"Stream":1,"_id":0});

// Selecting specific fields only

// I want Name, salary., where salary < 500000

db.students.find({"Salary":{$lte:50000}},{"Name":1,"Salary":1,"_id":0});