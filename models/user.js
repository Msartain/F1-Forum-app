const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    body: {
        type: String,
        require: true
    },    
    likes: Number,
    userId: String,
    name: String,
    avatar: String
}, {
    timestamps: true
})

let postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },    
    body: {
        type: String,
        required: true
    },    
    likes: Number,
    userId: String,
    name: String,
    avatar: String,
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