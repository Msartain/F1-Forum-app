const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    body: String,
    likes: Number,
}, {
    timestamps: true
})

let postSchema = new Schema ({
    title: String,
    body: String,
    likes: Number,
    comments: [commentSchema]
}, {
    timestamps: true
})

let userSchema = new Schema ({
    name: String,   
    email: String,
    googleId: String,
    born: Date,
    avatar: String,
    favDriver: String,
    favTeam: String,
    posts: [postSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);