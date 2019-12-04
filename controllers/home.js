const User = require('../models/user');


module.exports = {
homePage,
newPost,
addPost,
show,
update
}

function update(req, res){
    console.log('UPDATE FUNCTION RAN')
}

function show(req, res){
    User.findOne({'posts._id': req.params.postId}).then(function(user) {
        // console.log('POST: ' + user.posts.id(req.params.postId))
        let post = user.posts.id(req.params.postId);
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
    req.body.userId = req.user._id.toString()
    req.user.posts.push(req.body);
    req.user.save(function(err){
        res.redirect('/home');
    });
}

function homePage(req, res){
    User.find({}, function(err, users){
        if (err) return;
        res.render('logged-in/home',{
            users,
            user: req.user,
        })
    } )
    
}

function newPost(req, res){
    res.render('logged-in/new', {user: req.user})
}