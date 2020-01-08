$(document).ready(function () {

  const $canvas = $('#map');

  $('.canvas-toolbar__list-item').on('dragstart', function (e) {
    const itemProperties = $(this).data('item-properties');
    e.originalEvent.dataTransfer.setData('application/json', JSON.stringify(itemProperties));
  });

  $('canvas').on('drop', function (e) {
    const itemProperties = e.originalEvent.dataTransfer.getData('application/json');
    const jsonItemProperties = JSON.parse(itemProperties);

    calculateAndSetFigurePosition(jsonItemProperties, e);
    
    if (jsonItemProperties.type === 'image') {      
      fabric.Image.fromURL(jsonItemProperties.src, function(oImg) {
        oImg.left = jsonItemProperties.left;
        oImg.top = jsonItemProperties.top;
        oImg.scale(0.3);

        window.Canvas.add(oImg).setActiveObject(oImg);
      });
      return;
    }

    const canvasItem = new fabric.Rect(jsonItemProperties);
    window.Canvas.add(canvasItem).setActiveObject(canvasItem);
  });

  function calculateAndSetFigurePosition(jsonItemProperties, e) {
    const pointer = window.Canvas.getPointer(e);
    const leftFigurePosition = pointer.x - jsonItemProperties.width / 2;
    const topFigurePosition = pointer.y - jsonItemProperties.height / 2;

    jsonItemProperties.left = leftFigurePosition;
    jsonItemProperties.top = topFigurePosition;
  }
});