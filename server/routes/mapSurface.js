const express = require('express');
const router = express.Router();

const mapSurfaceController = require('../controller/mapSurface');

router
  .post('/map', (req, res, next) => mapSurfaceController.postSaveMap(req, res, next))
  .get('/map', (req, res, next) => mapSurfaceController.getMap(req, res, next));

module.exports = router;
