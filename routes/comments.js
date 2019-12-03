let express = require('express');
let router = express.Router();
let commentsCtrl = require('../controllers/comments');

router.post('/home/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/post/:pid/comments/:cid', isLoggedIn, commentsCtrl.delete);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }
  module.exports = router;