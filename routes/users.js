const express= require('express');
// using express.Router
const router= express.Router();

const usersController= require('../controllers/users_controller');
router.get('/profile', usersController.profile);

module.exports= router;