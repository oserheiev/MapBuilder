const mongoose = require('mongoose');

const numberSchemaInterface = {
  type: Number
};

const stringSchemaInterface = {
  type: String
};

const booleanSchemaInterface = {
  type: Boolean
};

const objectSchemaInterface = {
  type: Object
};

const Schema = mongoose.Schema;
const mapSurfaceSchema = new Schema({
  authorId: objectSchemaInterface,
  current: booleanSchemaInterface,
  version: stringSchemaInterface,
  objects: [{
    angle: 0,
    backgroundColor: stringSchemaInterface,
    clipTo: stringSchemaInterface,
    fill: stringSchemaInterface,
    fillRule: stringSchemaInterface,
    flipX: stringSchemaInterface,
    flipY: stringSchemaInterface,
    globalCompositeOperation: stringSchemaInterface,
    height: numberSchemaInterface,
    left: numberSchemaInterface,
    opacity: numberSchemaInterface,
    originX: stringSchemaInterface,
    originY: stringSchemaInterface,
    paintFirst: stringSchemaInterface,
    rx: stringSchemaInterface,
    ry: stringSchemaInterface,
    scaleX: numberSchemaInterface,
    scaleY: numberSchemaInterface,
    shadow: stringSchemaInterface,
    skewX: numberSchemaInterface,
    skewY: numberSchemaInterface,
    stroke: stringSchemaInterface,
    strokeDashArray: stringSchemaInterface,
    strokeDashOffset: stringSchemaInterface,
    strokeLineCap: stringSchemaInterface,
    strokeLineJoin: stringSchemaInterface,
    strokeMiterLimit: numberSchemaInterface,
    strokeWidth: numberSchemaInterface,
    top: numberSchemaInterface,
    type: stringSchemaInterface,
    version: stringSchemaInterface,
    visible: stringSchemaInterface,
    width: numberSchemaInterface,
  }]
});

module.exports = mongoose.model('MapSurface', mapSurfaceSchema);
