$(document).ready(function () {

  const $canvas = $('#map');

  $('.canvas-toolbar__list-item').on('dragstart', function (e) {
    const itemProperties = $(this).data('item-properties');
    e.originalEvent.dataTransfer.setData('application/json', JSON.stringify(itemProperties));
  });

  $('canvas').on('drop', function (e) {
    const itemProperties = e.originalEvent.dataTransfer.getData('application/json');
    const jsonItemProperties = JSON.parse(itemProperties);
    
    var pointer = window.Canvas.getPointer(e);
    jsonItemProperties.left = pointer.x;
    jsonItemProperties.top = pointer.y;

    const canvasItem = new fabric.Rect(jsonItemProperties);

    window.Canvas.add(canvasItem).setActiveObject(canvasItem);
  });
});