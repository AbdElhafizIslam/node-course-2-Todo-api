const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err)
  {
    console.log('Unable To connect to MongoDB server');
  }
  else
  console.log('Connected To MongoDB Server');
  const db = client.db('TodoApP');

db.collection('Todos').insertOne({
  text:'Someting to do',
  completed:false
},(err,result)=>{
  if (err)
  {
    return console.log('Unable to open the insert Todo',err);
  }

  console.log(JSON.stringify(result.ops,undefined,2));
});


db.collection('Todos').insertOne({
  text:'buy Groceries',
  completed:false
},(err,result)=>{
  if (err)
  {
    return console.log('Unable to open the insert Todo',err);
  }

  console.log(JSON.stringify(result.ops,undefined,2));
});

  // db.collection('Users').insertOne({
  //   name:'Hafiz',
  //   age :'24',
  //   location : 'egypt'
  // },(err,result)=>{
  //   if (err){
  //   return console.log('Unable To add a new user info',err);
  //
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });




      client.close();
});
