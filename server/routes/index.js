const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const pageRouter = require('./page');
const mapSurfaceRouter = require('./mapSurface');

router.use(pageRouter);
router.use('/api/user', userRouter);
router.use('/api', mapSurfaceRouter);

module.exports = router;
