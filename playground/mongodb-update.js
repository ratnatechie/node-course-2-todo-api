// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conneccted to MongoDB server');

  //FindoneandUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ea185d14fdd28660d3f560d')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ea1aa344fdd28660d3f5b93')
  },{
    $set: {
      name: 'Chhaya',
      age: 26
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
