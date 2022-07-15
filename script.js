$(document).ready(function () {
  //show the current time including the moment.min.js
  $("#currentDay").text(moment().format("MMMM Do YYYY")); // use of moment.js
  //save button
  hourTracking();
  //When user clicks button content saves
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text); //local storage so on refresh it is stored here (check in application to make sure this works and does not give back undefined)
  });

  //Adding the data to the local storage so when you refresh the data is still there
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracking() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      //add in loop for the time-blocks
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);
      //checking to see if moved past time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
});
