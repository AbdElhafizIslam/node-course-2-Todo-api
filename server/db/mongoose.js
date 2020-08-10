var mongoose= require('mongoose');

mongoose.Promise= global.Promise;
//connecting with the database using mongoose (note difference with MongoClient)
mongoose.connect('mongodb://localhost:27017/TodoApp');
//save new something // mongoose tekes care of oredering code lines (waites until the server is connecting and then run the rest of the code)


module.exports={      //ES6shortcut module.exports={mongoose};
  mongoose:mongoose
};
