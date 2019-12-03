const express = require('express');
const router = express.Router();

const mapSurfaceController = require('../controller/mapSurface');

router
  .post('/map', mapSurfaceController.postSaveMap);

module.exports = router;
