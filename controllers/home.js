const User = require('../models/user');


module.exports = {
homePage,
newPost,
addPost,
show
}

function show(req, res){
    User.findOne({'posts._id': req.params.postId}).then(function(user) {
        console.log('POST:' + user.posts.id(req.params.postId))
        var post = user.posts.id(req.params.postId);
        res.render('logged-in/show', {post: post, user: req.user})
    })
    // User.findById(req.params.userId, function(err, user){
    //     user.posts.forEach(function(post){
    //         let postString = post._id.toString();
    //         if(postString === req.params.postId){
    //         }
    //     })
    // })
}

function addPost(req, res){
    req.user.posts.push(req.body);
    req.user.save(function(err){
        res.redirect('/home', );
    });
}

function homePage(req, res){
    res.render('logged-in/home',{user: req.user})
}

function newPost(req, res){
    console.log('Hitting controller')
    res.render('logged-in/new', {user: req.user})
}