const express = require('express');
const router = express.Router();
const Play = require('../models/Play');

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const plays = await Play.find();
        res.json(plays);
    } catch (err) {
        console.log(err);
        res.json({ message: err});
    }
});

// SPECIFIC POST
router.get('/:playId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});

module.exports = router;