const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/example', postController.example);
router.post('/createpost', postController.createPost);
router.get('/getposts', postController.getPosts);
router.get('/createuser', userController.createUser);

module.exports = router;