var express = require('express');
var paginate = require('express-paginate');
var db = require('../db.js');

var router = express.Router();
// By default, return at most 25 products per page (max' limit is 100)
router.use(paginate.middleware(25, 100));


function transformDatabaseRowsToJsonResponse(rows){
  // TODO: Actually transform the rows, instead of just returning fake data
  return {items: [
    {sku: '1', price: 129.99, brand: 'Chloe', name: 'Blue Denim Dress', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v489/162338F052002_1.jpg'},
    {sku: '2', price: 49.99, brand: 'Palm Angels', name: 'Blue USA Cap', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161695M139003_1.jpg'},
    {sku: '3', price: 79.99, brand: 'Blackmeans', name: 'Green Check Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161625M192001_1.jpg'},
    {sku: '4', price: 79.99, brand: 'Kenzo', name: 'Black Tiger T-Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/162387F110001_1.jpg'},
    {sku: '5', price: 79.99, brand: 'Kenzo', name: 'Green T-Shirt'}
  ]};
}



/* GET all products */
router.get('/', function(req, res, next) {

  console.log('SOMEONE IS TRYING TO GET A LIST OF PRODUCTS');

  var offset = (req.query.page - 1) * req.query.limit;
  db.query('SELECT * FROM products LIMIT ?,?', [offset, req.query.limit],
    function(err, rows, fields) {
      if (err) next(err);
      res.json(transformDatabaseRowsToJsonResponse(rows));
    }
  );
});


/* GET a specific product */
router.get('/:sku', function(req, res, next) {
  var sku = req.params.sku;

  db.query('SELECT * FROM products WHERE sku=?', [sku], function(err, rows, _) {
      if (err) next(err);
      if (rows.length == 0) return next(new Error(`Cannot find product ${sku}`));
      res.json(transformDatabaseRowsToJsonResponse(rows)[0]);
    }
  );
});


module.exports = router;
