$(document).ready(function () {

  $('.canvas-toolbar__list-item').on('dragstart', function (e) {
    const itemProperties = $(this).data('item-properties');
    e.originalEvent.dataTransfer.setData('application/json', JSON.stringify(itemProperties));
  });

  $('canvas').on('drop', function (e) {
    const itemProperties = e.originalEvent.dataTransfer.getData('application/json');
    const jsonItemProperties = JSON.parse(itemProperties);
    const canvasItem = new fabric.Rect(jsonItemProperties);

    window.Canvas.add(canvasItem).setActiveObject(canvasItem);
  });
});