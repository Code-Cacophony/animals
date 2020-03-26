$(document).ready(function () {
    $("form#form-selector").submit(function () {
        event.preventDefault();
        var animal = parseInt($("#select-animal").val());
        // var animal = $("#select-animal").val();
        // animal = parseInt(animal);
        console.log(animal);

        $("#output").text(animal);

        if (animal === 1) {
            $("#tortoise").show();
            $("#horse").hide();
            $("#toad").hide();
        }
        else if (animal === 2) {
            $("#horse").show();
            $("#tortoise").hide();
            $("#toad").hide();
        }
        else {
            $("#toad").show();
            $("#horse").hide();
            $("#tortoise").hide();
        }

    });

});