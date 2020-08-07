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
    // db.collection('Todos').deleteMany({text:'grab a drink'}).then((result)=>{
    //   console.log(result);
    //
    // });

    // db.collection('Todos').deleteOne({text:'buy Groceries'}).then((result)=>{
    //   console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    //   console.log(result);
    // });
    // db.collection('Users').deleteMany({name:'ahmed'}).then((result)=>{
    //   console.log(result);

    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5f2d5d48088b85626cf666c7")}).then((result)=>{

      console.log(result);
    });

       // client.close();
});
