const express= require('express');
// using express.Router
const router= express.Router();

const userController= require('../controllers/users_controller');
router.get('/create-user', userController.createUser);

module.exports= router;