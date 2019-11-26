let express = require('express');
let router = express.Router();
let homeCtrl = require('../controllers/home');


router.get('/', homeCtrl.homePage);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;
