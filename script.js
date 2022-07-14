$(document).ready(function () {
    //show the current time including the moment.min.js
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));
    //Adding the data to the local storage so when you refresh the data is still there
})