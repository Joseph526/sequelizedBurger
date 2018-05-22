$(document).ready(function() {
    $("#btnSubmit").on("click", function(event) {
        event.preventDefault();

        // Capture user input
        var newBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.post("/api/burgers", newBurger)
            .then(function() {
                location.reload();
            });
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            location.reload();
        });
    });
});