const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router
  .get('/logout', userController.getLogout)
  .post('/registration', userController.postRegister)
  .post('/login', userController.postLogin);

module.exports = router;
