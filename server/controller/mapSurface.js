const MapSurface = require('../models/mapSurface');

class MapSurfaceController {

  postSaveMap(request, response, next) {
    const { mapJson } = request.body;

    if (mapJson) {
      mapJson.authorId = request.user._id;

      new MapSurface(mapJson).save()
        .catch(err => {
          console.log(err);
        });
        
        response.sendStatus(200);
        return;
    }
    response.sendStatus(400);
  }
}

module.exports = new MapSurfaceController();
