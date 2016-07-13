var express = require('express');
var paginate = require('express-paginate');

var db = require('../db.js');
var ProductDAO = require('../product-dao.js');
var dao = new ProductDAO(db);

var router = express.Router();
// By default, return at most 25 products per page (max' limit is 100)
router.use(paginate.middleware(25, 100));


// Helpers ...

function transformDatabaseRowsToJsonResponse(rows){
  return { items: rows.map(r => transformDatabaseRowToJsonResponse(r)) };
}

function transformDatabaseRowToJsonResponse(row){
  return {sku: row.sku, price: 999.99, brand: row.brand,
    name: row.name, image: row.image};
};



/* GET all products */
router.get('/', function(req, res, next) {
  var opts = {limit: req.query.limit || 25, page: req.query.page || 1};
  dao.getProducts(opts, function(err, rows){
    if (err) return next(err);
    res.json(transformDatabaseRowsToJsonResponse(rows));
  });
});


/* GET a specific product */
router.get('/:sku', function(req, res, next) {
  var sku = req.params.sku;
  // FIXME: Verify that sku is valid (e.g. not null), before hitting the db

  dao.getProduct(sku, {}, function(err, row){
    if (err) return next(err);
    res.json(transformDatabaseRowToJsonResponse(row));
  });
});


module.exports = router;
