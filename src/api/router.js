const { Router } = require('express');
const noteApi = require('./note/router');

const router = Router();

router.use('/api', [noteApi]);

module.exports = router;
