const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const pageRouter = require('./page');

router.use(pageRouter);
router.use('/api/user', userRouter);

module.exports = router;
