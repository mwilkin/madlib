/*
$(document).ready(function() {
  $("form").submit(function(event) {
    var input = $("#in").val();
    input = input.toUpperCase();
    $("#out").append("<li>" + input + "</li>");
    event.preventDefault();
  });
});
*/
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});
