var tableBtn = $("#tableBtn");
var resBtn = $("#resBtn");

$(document).ready(function () {
    $("#tableBtn").on("click", function() {
        event.preventDefault();
    });

    $("#resBtn").on("click", function() {
        event.preventDefault();
    });



    var reservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

    console.log(reservation);

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/table", reservation,
    function(data){
        if(data == true){
            alert("You got it!")
        }
        if(data == false){
            alert("You are on the waiting list!")
        }

        $('#reserve_name').val("");
        $('#reserve_phone').val("");
        $('#reserve_email').val("");
        $('#reserve_uniqueID').val("");

    });
    
    $(".submit").on("click", function(){
        event.preventDefault();
    });

return false;

});
