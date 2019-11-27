const express = require('express');
const path = require('path');
const router = express.Router();
const { ensureAuth } = require('../config/auth');

const staticFolderPath = path.join(__dirname, '../../views/static/');

router
  .get('/', (req, res) => res.render('welcome'))
  .get('/registration', (req, res) => res.render('register'))
  .get('/login', (req, res) => res.render('login'))
  
  .get('/dashboard', ensureAuth, (req, res) =>
    res.render('dashboard', {
      user: req.user
    })
  );

module.exports = router;
