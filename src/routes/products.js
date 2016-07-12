var express = require('express');
var paginate = require('express-paginate');
var db = require('../db.js');

var router = express.Router();
// By default, return at most 25 products per page (max' limit is 100)
router.use(paginate.middleware(25, 100));


/* GET all products */
router.get('/', function(req, res, next) {
  var offset = (req.query.page - 1) * req.query.limit;
  db.query('SELECT * FROM products LIMIT ?,?', [offset, req.query.limit],
    function(err, rows, fields) {
      if (err) next(err);
      res.json(rows);
    }
  );
});


/* GET a specific product */
router.get('/:sku', function(req, res, next) {
  var sku = req.params.sku;

  db.query('SELECT * FROM products WHERE sku=?', [sku], function(err, rows, _) {
      if (err) next(err);
      if (rows.length == 0) return next(new Error(`Cannot find product ${sku}`));
      res.json(rows[0]);
    }
  );
});


module.exports = router;
