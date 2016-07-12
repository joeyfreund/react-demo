var express = require('express');
var db = require('./db.js');
var productsRoutes = require('./routes/products');

// ---------------------- Setup express ----------------------------------------

var app = express();
app.use(express.static(__dirname + '/static'))
app.use('/api/:version/products', productsRoutes);

// --------------------- Connect to database, and start the server -------------

db.getConnection(function(error, connection){

  if(error){
    console.log('Failed to the connect to the database', error);
    process.exit(1);
  }

  // Now that we know that we can connect to the database, let's start the app ...
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
  });
});
