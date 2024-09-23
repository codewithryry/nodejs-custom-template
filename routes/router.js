const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

// Route for the homepage
router.get('/', controller.homepage);
router.get('/about', controller.aboutPage);
router.get('/login', controller.loginPage);
router.get('/contact', controller.contactPage);
router.get('/register', controller.registerPage)



module.exports = router;
