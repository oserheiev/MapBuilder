const mapService = require('../services/mapService');

class MapSurfaceController {

  _doSaveMap(mapJson, request, response) {
    try {
      mapService.saveMap(mapJson, request.user);
      response.sendStatus(200);
    } catch (e) {
      console.log(err);
      response.sendStatus(500);
    };
  }

  postSaveMap(request, response, next) {
    const { mapJson } = request.body;

    if (mapJson) {
      this._doSaveMap(mapJson, request, response);
      return;
    }
    response.sendStatus(400);
  }

  getMap(request, response, next) {
    const mapPromise = mapService.loadCurrentMap();
    
    mapPromise.then((mapJson) => {
      if (mapJson) {
        response.json(mapJson);
        return;
      }
      response.sendStatus(404);
    }).catch(err => {
      console.log(err);
      response.sendStatus(500);
    });
  }
}

module.exports = new MapSurfaceController();
