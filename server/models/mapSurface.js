const mongoose = require('mongoose');

const stringSchemaInterface = {
  type: String,
  required: true
};

const objectSchemaInterface = {
  type: Object,
  required: true
};

const Schema = mongoose.Schema;
const mapSurfaceSchema = new Schema({
  authorId: objectSchemaInterface,
  version: stringSchemaInterface,
  objects: objectSchemaInterface
});

module.exports = mongoose.model('MapSurface', mapSurfaceSchema);
