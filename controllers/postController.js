const Post = require('../models/dataModel');


exports.example = function(req, res) {
    res.send("TEST CONTROLLER");
};

exports.createPost = function(req, res) {
    let post = new Post(
        {
            name: req.body.name,
            skills: req.body.skills,
            personalDescription: req.body.personalDescription
        }
    );

    post.save(function (err) {
        if (err) {
            return next(err);
        }
    });
    res.send("post created successfully");
};

exports.getPosts = function(req, res) {
    Post.find({}, function(err, posts) {
        res.send(posts);
    });

}