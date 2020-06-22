const express= require('express');
// using express.Router
const router= express.Router();
// require the home_controller
const homeController= require('../controllers/home_controller');


// get access to the home_controller home action
router.get('/', homeController.home);



// console.log('router is loaded');
// export the router
module.exports= router;
