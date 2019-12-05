const User = require('../models/user');


module.exports = {
    homePage,
    newPost,
    addPost,
    show,
    update,
    delete: deletePost
}

function deletePost(req, res){
    User.findOne({'posts._id': req.params.id}).then(function(user){
        let post = user.posts.id(req.params.id);
        post.remove(req.params.id)
        user.save(function(err){
            if(err)return err
            res.redirect('/home')
        })
    })
}

function update(req, res, next){
    User.findById(req.session.passport.user).then(function(user) {
        user.posts.forEach(function(p){
             if(p._id == req.params.id){
                p.title = req.body.title;
                p.body = req.body.body;
            }
        })
        user.save(function(err){
            if(err)return next(err);
            res.redirect(`/home/${user._id}/${req.params.id}`)
        })
    })
}

function show(req, res){
    User.findOne({'posts._id': req.params.postId}).then(function(user) {
        let post = user.posts.id(req.params.postId);
        res.render('loggedIn/show', {post: post, user: req.user})
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
    req.body.avatar = req.user.avatar
    req.body.userId = req.user._id.toString()
    req.body.name = req.user.name
    req.user.posts.push(req.body);
    req.user.save(function(err){
        res.redirect('/home');
    });
}

function homePage(req, res){
    User.find({}, function(err, users){
        if (err) return;
        res.render('loggedIn/home',{
            users,
            user: req.user,
        })
    } )
    
}

function newPost(req, res){
    res.render('loggedIn/new', {user: req.user})
}