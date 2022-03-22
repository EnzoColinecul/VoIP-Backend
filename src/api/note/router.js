const { Router } = require('express');
const { get, getById } = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

const router = Router();

router.route('/note')
  .post(post)
  .get(get);

router.route('/note/:id')
  .get(getById)
  .put(put)
  .delete(del);

module.exports = router;
