import {findAllCourses} from "./db-data";

console.log("Populating the MongoDB database with some sample data ...");

const MongoClient = require('mongodb').MongoClient;

// Connection URL - replace with your own email and password
const url = 'mongodb+srv://nestjs:ZeEjdswOWHwoenQO@cluster0-dbucq.gcp.mongodb.net';

// Database Name
const dbName = 'nestjs-course';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(async (err, client) => {

  if (err) {
    console.log("Error connecting to database, please check the username and password, exiting.");
    process.exit();
  }

  console.log("Connected correctly to server");

  const db = client.db(dbName);

  await db.collection('courses').insertMany(findAllCourses());

  console.log('Finished uploading data, exiting.');

  process.exit();

});

console.log('updloading data to MongoDB...');

process.stdin.resume();
