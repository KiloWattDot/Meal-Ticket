const mongoose = require('mongoose');// Import the necessary libraries
require('dotenv').config() //Pulling .env contents 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mealticket', { //connection to the mongodb database
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  //Options specific to the mongoose library that configure the connections behavior
  
});

module.exports = mongoose.connection;
// when another module imports this module using require, they will receive the mongoose.connection object as the result of the import.