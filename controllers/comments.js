const User = require('../models/user');


module.exports = {
    create,
    delete: deleteComment
}

function deleteComment(req, res){
    User.findOne({'posts._id': req.params.pid}).then(function(user){
        let post = user.posts.id(req.params.pid);
        post.comments.remove(req.params.cid)
        user.save(function(err){
            if(err)return err
            res.redirect(`/home/${user._id}/${req.params.pid}`)
        })
    })
}   

function create(req, res){
    //adding the current loggen in user id to the userId property of req.body
    req.body.userId = req.user._id
    // finding the user who owns the post with the posts' id
    User.findOne({'posts._id': req.params.id}).then(function(user) {
        // setting post as the current post being viewed
        let post = user.posts.id(req.params.id);
        // adding a new comment to the comment array inside the current post
        post.comments.push(req.body)
        //always save parent schema (user)
        user.save(function(err){
            if(err)return err
            // redirect with 
            res.redirect(`/home/${req.user._id}/${req.params.id}`)
        })
    });
}
