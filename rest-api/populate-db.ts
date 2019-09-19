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

  try {

    if (err) {
      console.log("Error connecting to database, please check the username and password, exiting.");
      process.exit();
    }

    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const courses = findAllCourses();

    for (let i = 0; i < courses.length; i++) {

      const course = courses[i];

      const newCourse: any = {...course};
      delete newCourse.id;

      console.log("Inserting course ",  newCourse);

      const result = await db.collection('courses').insertOne(newCourse);

      console.log("insertedId", result.insertedId);

    }

    console.log('Finished uploading data, exiting.');
    client.close();
    process.exit();

  }
  catch (error) {
    console.log("Error caught, exiting: ", error);
    client.close();
    process.exit();
  }

});

console.log('updloading data to MongoDB...');

process.stdin.resume();
