const User = require('../models/user');


module.exports = {
homePage,
newPost,
addPost
}


function addPost(req, res){
    console.log('ADDPOST FUNCTION RAN')
    req.user.posts.push(req.body);
    req.user.save(function(err){
        res.redirect('/home');
    });
}

function homePage(req, res){
    res.render('logged-in/home',{user: req.user})
}

function newPost(req, res){
    console.log('Hitting controller')
    res.render('logged-in/new', {user: req.user})
}