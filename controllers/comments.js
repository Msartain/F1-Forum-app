const User = require('../models/user');


module.exports = {
create
}



function create(req, res){
    User.findOne({'posts._id': req.params.id}).then(function(user) {
        let post = user.posts.id(req.params.id);
        post.comments.push(req.body)
        user.save(function(err){
            if(err)return err
            res.redirect(`/home/${req.user._id}/${req.params.id}`)
        })
    });
}
