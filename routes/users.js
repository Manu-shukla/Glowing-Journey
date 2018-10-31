var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, err) {
  if(err)
  {
    res.send("error found")
  }
  else
  {
  res.send('respond with a user resource');
  }
});

module.exports = router;
