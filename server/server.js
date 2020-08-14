var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');


var app = express();

app.use(bodyParser.json()); // reading the json file from the user



app.post('/todos',(req,res)=>{ // create new post to the client
console.log(req.body);

var todo = new Todo({
  text: req.body.text
});


todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
  res.status(400).send(e);
});
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos}); // ES6 syntax todos='todos' unstead of (todos)
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if (!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if (!todo)
    {
      res.status(400).send();
    }
    if (todo){
      res.send({todo});
    }
    else (!todo)
      res.status(404).send();


  });


});



app.listen(3000,()=>{
  console.log('started at port 3000');
});


module.exports={app}; //ES^ object syntanx {app='app'}
