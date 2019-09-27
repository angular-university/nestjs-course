import {findAllCourses, findLessonsForCourse} from './db-data';

console.log("Populating the MongoDB database with some sample data ...");

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


/*****************************************************************************************************
*
*
* IMPORTANT!!!
*
* MongoDB Connection URL - create your own url with the right cluster name, username, password and database name
*
* Format: mongodb+srv://username:password@clustername
*
* Example (don't use this as you don't have write access):
*
* mongodb+srv://nestjs:ZeEjdswOWHwoenQO@cluster0-dbucq.gcp.mongodb.net
*
*****************************************************************************************************/

const MONGODB_CONNECTION_URL = 'mongodb+srv://nestjs-admin:BSFGkUY7T0XcJfpI@cluster0-4r2ye.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'nestjs-course';





// Create a new MongoClient
const client = new MongoClient(MONGODB_CONNECTION_URL);

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

      const course:any = courses[i];

      const newCourse: any = {...course};
      delete newCourse.id;

      console.log("Inserting course ",  newCourse);

      const result = await db.collection('courses').insertOne(newCourse);

      const courseId = result.insertedId;

      console.log("new course id", courseId);

      const lessons = findLessonsForCourse(course.id);

      for (let j = 0; j< lessons.length; j++) {

        const lesson = lessons[j];

        const newLesson:any = {...lesson};
        delete newLesson.id;
        delete newLesson.courseId;
        newLesson.course = new ObjectId(courseId);

        console.log("Inserting lesson", newLesson);

        await db.collection("lessons").insertOne(newLesson);

      }

    }

    console.log('Finished uploading data, creating indexes.');

    await db.collection('courses').createIndex( { "url": 1 }, { unique: true } );

    console.log("Finished creating indexes, exiting.");

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
