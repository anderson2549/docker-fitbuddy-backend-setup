const database = 'fitbuddy';
const collection = 'logs';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);



// Switch to the 'admin' database
db = db.getSiblingDB(database);

// Create the admin user
db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "dbAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" },
        { role: "userAdminAnyDatabase", db: "fitbuddy" },
        { role: "dbAdminAnyDatabase", db: "fitbuddy" },
        { role: "readWriteAnyDatabase", db: "fitbuddy" }
    ]
});

// Create a user for the 'fitbuddy' database
db.createUser({
    user: "root",
    pwd: "example",
    roles: [
        { role: "readWrite", db: "fitbuddy" },
        { role: "dbAdmin", db: "fitbuddy" }
    ]
});
// Create an additional admin user
db.createUser(
   {
       user: "admin1", 
       pwd: "admin1", 
       roles:["root"]
   })

// Add a listener to log when MongoDB starts successfully
print('MongoDB is up and running!');



