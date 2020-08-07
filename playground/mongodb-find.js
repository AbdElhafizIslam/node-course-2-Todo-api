 // const MongoClient = require('mongodb').MongoClient;
const { MongoClient , ObjectID } = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err)
  {
  return console.log('Unable To connect to MongoDB server');
  }
  else{
  console.log('Connected To MongoDB Server');
      }

    const db = client.db('TodoApP');
  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count :${count}`);
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });


  db.collection('Users').find({name:'gudle'}).toArray().then((docs)=>{
    console.log('Users');
    console.log('The Username info inquired is ');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=>{
    console.log('unable to find the name you inquired',err);
  });


       // client.close();
});
