# First we have to install mongodb python supported version
# pip install pymongo

import pymongo

# creating client
# providing (protocol://Ip address:port number)

client = pymongo.MongoClient('mongodb://127.0.0.1:27017/')

# creating database
mydb = client['Employee']

# Creating collection object

inforamtion = mydb.employeeinfo

#Inserting document into collection
record ={"Name":"Arjun","Degree":"Bachelors","Stream":"Elecrical Engineering","CGPA":8.9,"Comments":"Placed in Infosys"}

inforamtion.insert_one(record)

#Inserting many records

record2 = {"Name":"Shravya","Degree":"Bachelors","Stream":"Chemical Engineering","CGPA":9.9,"Comments":"Placed in IVY"}
record3 = {"Name":"Ruchitha","Degree":"Bachelors","Stream":"Computer science Engineering","CGPA":9.6,"Comments":"Placed in Infosys","Status":"Married,Canada"}
record4 = {"Name":"Raviteja","Degree":"Bachelors","Stream":"Elecrical Engineering","CGPA":8.9,"Comments":"Govt Job","Salary":56000}

inforamtion.insert_many([record2,record3,record4])

#Reading the records

all_docs = inforamtion.find()
print(all_docs)
