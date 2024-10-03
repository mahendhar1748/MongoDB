
// Queries nothing but ., using find method of MongoDB with Operators(Logical or Anything)

// Writing queries in find statement
/* various conditions to be used are...
Equality
Less than equal
Greater than 
Grater than equal
Not equal
*/

db.students.find();

// update
db.students.update(
    {"Name":"Mahendhar"},
    {
     $set:
       {"Salary":50000}
    }
  );

  db.students.update(
    {"Name":"Arjun"},
    {
     $set:
       {"Salary":56000}
    }
  );
  db.students.update(
    {"Name":"Ruchitha"},
    {
     $set:
       {"Salary":45000}
    }
  );



db.students.insertMany([
    {"Name":"Anusha","Degree":"Bachelors","Stream":"Computer science Engineering","CGPA":8.8,"Status":"Prepairing for Govt","Salary":67000},
    {"Name":"Raviteja","Degree":"Bachelors","Stream":"Elecrical Engineering","CGPA":8.9,"Comments":"Govt Job","Salary":56000}
  ]);


// *********************************************** AND ********************************************
db.students.find({"Name":"Mahendhar","Salary":120000});

// There is no matches with above criteria. This criteria is defaulty AND Condition

db.students.find(
    {$and : [{"Stream":"Electrical Engineering"},{"Salary":{$lte:50000}}]}
);

// *********************************************** OR **************************************************

db.students.find(
    {$or : [{"Stream":"Electrical Engineering"},{"Salary":{$lte:50000}}]}
);

// *********************************************** Less Than Equal ****************************************

// Finding Salary Less than  Equal 50000
db.students.find({"Salary":{$lte:50000}});
db.students.find({"Salary":{$lt:50000}});

// *********************************************** Greater Than Equal ****************************************

// Finding Salary Greater  than Equal 50000
db.students.find({"Salary":{$gte:50000}});
db.students.find({"Salary":{$lte:50000}});


// *****************************************************************************************************************
//      *********************************   SELECTING FIELDS *****************************************************
// ****************************************************************************************************************

db.students.find();

// To Know how many streams in Study for each Student

db.students.find({},{"Stream":1});

// the output of above command gives id and stream but id dont need id. 

db.students.find({},{"Stream":1,"_id":0});

// Selecting specific fields only

// I want Name, salary., where salary < 500000

db.students.find({"Salary":{$lte:50000}},{"Name":1,"Salary":1,"_id":0});





