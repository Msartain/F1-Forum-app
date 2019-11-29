let express = require('express');
let router = express.Router();
let homeCtrl = require('../controllers/home');


router.get('/', homeCtrl.homePage);
router.get('/new', homeCtrl.newPost);
router.post('/', homeCtrl.addPost);


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;
