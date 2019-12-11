const MapSurface = require('../models/mapSurface');

class MapService {

     saveMap(mapJson, user) {
        MapSurface.findOneAndDelete({ current: true })
        .then((data) => {
            mapJson.authorId = user._id;
            mapJson.current = true;
    
            return new MapSurface(mapJson).save();
        });
    }

    loadCurrentMap() {
        return MapSurface.findOne({ current: true });
    }
}

module.exports = new MapService();