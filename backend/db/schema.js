const mongo = require('./connection');

var Schema = mongo.Schema;

var blogs = new Schema({
    title : String,
    snippet : String,
    text : String
});

var blogPosts = mongo.model('blogs', blogs);


module.exports = blogPosts;