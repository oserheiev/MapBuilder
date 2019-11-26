(function() {
    var canvas = this.__canvas = new fabric.Canvas('map');
  
    var rect = new fabric.Rect({
      left: 150,
      top: 200,
      originX: 'left',
      originY: 'top',
      width: 150,
      height: 120,
      angle: -10,
      fill: 'rgba(255,0,0,0.5)',
      transparentCorners: false
    });
  
    canvas.add(rect).setActiveObject(rect);
})();