let express = require('express');
let router = express.Router();
let apiCtrl = require('../controllers/api');

router.get('/drivers', isLoggedIn, apiCtrl.showDrivers);
router.get('/', isLoggedIn, apiCtrl.showConstructors);


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }
module.exports = router;