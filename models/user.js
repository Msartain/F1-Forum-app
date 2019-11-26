const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    body: {
        type: String
    },
    likes: {
        type: Number
    },
}, {
    timestamps: true
})

let postSchema = new Schema ({
    title: {
        type: String
    },
    body: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

let userSchema = new Schema ({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    googleId: {
        type: String
    },
    born: {
        type: Date()
    },
    avatar:{
        type: String
    },
    favDriver: {
        type: String
    },
    favTeam: {
        type: String
    },
    posts: [postSchema],
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);