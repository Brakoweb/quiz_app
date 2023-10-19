$(document).ready(function () {
  $(".option").on("click", function () {
    $(".option").off("click");

    var selectedOption = $(this);
    var isCorrect = selectedOption.data("correct"); // Check if the data attribute 'correct' is true

    if (isCorrect) {
      selectedOption.addClass("correct");
      $(".feedback").text(
        "Correct! Super Mario Bros. is a classic Nintendo game."
      );
    } else {
      selectedOption.addClass("incorrect");
      $(".feedback").text("Incorrect. Try again.");
    }
  });
});
