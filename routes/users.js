const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, _next) => {
  res.send('respond with a resource');
});

router.get('/cool', (req, res, _next) => {
  res.render('cool', { title: 'Cool!' });
});

module.exports = router;
