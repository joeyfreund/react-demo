var shuffle = require('knuth-shuffle').knuthShuffle
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/:version/products', function (req, res) {

  // Notice how we capture the path parameter
  console.log(`Got an API call (API version ${req.params.version})`)

  res.json({
    items: shuffle([
      {brand: 'Chloe', product: 'Blue Denim Dress', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v489/162338F052002_1.jpg'},
      {brand: 'Palm Angels', product: 'Blue USA Cap', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161695M139003_1.jpg'},
      {brand: 'Blackmeans', product: 'Green Check Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161625M192001_1.jpg'},
      {brand: 'Kenzo', product: 'Black Tiger T-Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/162387F110001_1.jpg'},
      {brand: 'Kenzo', product: 'Green T-Shirt'}
    ])
  });

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
