const express= require('express');
const router= express.Router();

const postController= require('../controllers/posts_controller');

router.get('/usersPosts', postController.createPost);


module.exports= router;