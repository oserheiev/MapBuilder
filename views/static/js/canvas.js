$(document).ready(function () {
    const ENTER_BUTTON = 46;

    const isEditMode = !!$('.canvas-toolbar__list').length;
    window.Canvas = new fabric.Canvas('map');

    $.ajax({
        url: '/api/map',
    }).done(function (body) {
        window.Canvas.loadFromJSON(body);
        if(!isEditMode) {
            Canvas.getObjects().forEach(element => {
                element.lockMovementX = true;
                element.lockMovementY = true;
                element.lockScalingX = true;
                element.lockScalingY = true;
                element.lockRotation = true;
                element.selectable = false;
            });
        }
    }).fail(function () {
        alert('Something went wrong!');
    });

    $('.save-draw').on('click', function () {
        const mapJson = window.Canvas.toJSON();

        $.ajax({
            url: '/api/map',
            method: 'POST',
            data: { mapJson: mapJson }
        }).done(function () {
            alert('The map is saved successfully!');
        }).fail(function () {
            alert('Cannot save map!');
        });
    });

    $(document).on('keydown', function (e) {
        const keyCode = e.keyCode;

        if (isEditMode && keyCode === ENTER_BUTTON) {
            onElementDelete();
        }
    });

    function onElementDelete() {
        const activeObjects = window.Canvas.getActiveObjects();

        activeObjects.forEach(canvasObject => {
            window.Canvas.remove(canvasObject);
        });
    }
});
