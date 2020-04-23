// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conneccted to MongoDB server');
  //deleteMany
  // db.collection('Users').deleteMany({name: 'Sachin'}).then((result) => {
  //   console.log(result);
  // })
  //deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneandDelete

  db.collection('Users').findOneAndDelete({_id : new ObjectID("5ea17abc7d629b2b7c2d74ae")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  //db.close();
});
