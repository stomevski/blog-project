const mongo = require('./connection');

var Schema = mongo.Schema;

var blogs = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

var blogPosts = mongo.model('blogs', blogs);


module.exports = blogPosts;