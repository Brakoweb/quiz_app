$(document).ready(function () {
  var questions = [
    {
      question: "Who is Nintendo's most famous plumber?",
      options: ["Mario", "Luigi", "Yoshi", "Donkey Kong"],
      answer: "Mario",
    },
    {
      question: "Which character wears a green tunic and carries an ocarina?",
      options: ["Link", "Samus", "Pikachu", "Sonic"],
      answer: "Link",
    },
    {
      question: "What is the name of the princess in Super Mario?",
      options: ["Peach", "Zelda", "Daisy", "Rosalina"],
      answer: "Peach",
    },
    {
      question:
        "In the game 'The Legend of Zelda,' what is the main character's name?",
      options: ["Link", "Zelda", "Ganondorf", "Toad"],
      answer: "Link",
    },
    {
      question:
        "Which Nintendo console was released in 1996 and introduced 3D gaming?",
      options: ["Super Nintendo", "Nintendo 64", "GameCube", "Wii"],
      answer: "Nintendo 64",
    },
    {
      question:
        "What is the name of the pink puffball character created by HAL Laboratory for Nintendo?",
      options: ["Yoshi", "Kirby", "Wario", "Pikachu"],
      answer: "Kirby",
    },
    {
      question:
        "Which Nintendo game features a character who can absorb and use the abilities of his enemies?",
      options: ["Metroid", "Mega Man", "Star Fox", "Kirby"],
      answer: "Kirby",
    },
    {
      question:
        "What is the name of the legendary racing game franchise by Nintendo featuring Mario and friends?",
      options: [
        "Mario Kart",
        "F-Zero",
        "Diddy Kong Racing",
        "Crash Team Racing",
      ],
      answer: "Mario Kart",
    },
    {
      question:
        "Which Nintendo character is known for being the 'King of Koopas'?",
      options: ["Bowser", "Wario", "Donkey Kong", "Luigi"],
      answer: "Bowser",
    },
    {
      question:
        "In the 'Animal Crossing' series, what is the name of the player's mortgage-paying raccoon landlord?",
      options: ["Tom Nook", "Redd", "K.K. Slider", "Isabelle"],
      answer: "Tom Nook",
    },
  ];

  var currentQuestion = 0;
  var score = 0;

  function displayQuestion(questionIndex) {
    $(".question").text(questions[questionIndex].question);
    var options = questions[questionIndex].options;
    $(".option").each(function (index) {
      $(this).text(options[index]);
    });
  }

  function updateScore() {
    $(".score").text("Score: " + score);
  }

  displayQuestion(currentQuestion);
  updateScore();

  $(".options").on("click", ".option", function () {
    var selectedOption = $(this).text();
    var correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      $(".feedback").addClass("correct");
      $(".feedback").text("Correct!");
      score += 1000;
      updateScore();
    } else {
      $(".feedback").addClass("incorrect");
      $(".feedback").text("Incorrect. The correct answer is: " + correctAnswer);
    }

    $(".option").off("click");
    $("#nextButton").show();
  });

  $("#nextButton").on("click", function () {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion(currentQuestion);
      $(".option").removeClass("correct incorrect");
      $(".feedback").removeClass("correct incorrect");
      $(".feedback").text("");
      $("#nextButton").hide();
      $(".option").on("click");
    } else {
      $(".feedback").removeClass("correct incorrect");
      $(".question").text(
        "Congratulations! You have answered all the questions."
      );
      $(".options").hide();
      $(".feedback").text("Your final score is: " + score);
      $("#nextButton").hide();
      $(".resetButton").show();
    }
  });

  function resetGame() {
    currentQuestion = 0;
    score = 0;
    displayQuestion(currentQuestion);
    updateScore();
    $(".option").removeClass("correct incorrect");
    $(".feedback").removeClass("correct incorrect");
    $(".feedback").text("");
    $("#nextButton").hide();
    $(".options").show();
    $(".resetButton").hide();
  }

  $(".resetButton").on("click", function () {
    resetGame();
  });

  resetGame();
});
