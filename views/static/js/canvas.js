$(document).ready(function () {
    window.Canvas = new fabric.Canvas('map');

    $('.save-draw').on('click', function () {
        const mapJson = window.Canvas.toJSON();

        $.ajax({
            url: '/api/map',
            method: 'POST',
            data: { mapJson: mapJson }
        }).done(function () {
            alert('The map is saved successfully!');
        }).fail(function () {
            alert('Something went wrong!');
        });
    });
});