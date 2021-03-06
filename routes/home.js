let express = require('express');
let router = express.Router();
let homeCtrl = require('../controllers/home');


router.get('/', isLoggedIn, homeCtrl.homePage);
router.get('/new', isLoggedIn, homeCtrl.newPost);
router.get('/:userId/:postId', isLoggedIn, homeCtrl.show);
router.post('/:id', isLoggedIn, homeCtrl.addPost);
router.delete('/posts/:id', isLoggedIn, homeCtrl.delete);
router.put('/posts/:id', isLoggedIn, homeCtrl.update)



function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;