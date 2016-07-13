'use strict';

export default class ProductDAO {

  constructor(db){
    this.db = db;
  }


  getProducts(callback, options){
    options = options || {};
    var limit = options.limit || 25;
    var page  = options.page  || 1;
    var offset = (page - 1) * limit;

    this.db.query('SELECT * FROM products LIMIT ?,?', [offset, limit],
      function(err, rows, fields) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, rows);
        }
      }
    );
  };


  getProduct(sku, callback, options){
    options = options || {};
    this.db.query('SELECT * FROM products WHERE sku=?', [sku],
      function(err, rows, fields) {
        if(err){
          callback(err, null);
        } else if (rows.length == 0) {
          callback(new Error(`Cannot find product ${sku}`), null);
        } else {
          callback(null, rows[0]);
        }
      }
    );
  };

}
