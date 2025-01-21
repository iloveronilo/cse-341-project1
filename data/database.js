const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Database is already initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            console.log('Database is initialized');
            return callback(null, database);
        })
        .catch((err) => {
            console.log(err);
        return callback(err);
        });

};

const getDatabase = () => {  
    if (!database) {
        throw new Error('Database is not initialized');
    }   
    return database;
   };

   module.exports = {  
    initDb,  
    getDatabase
   };