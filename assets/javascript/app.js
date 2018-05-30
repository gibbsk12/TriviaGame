var triviaQuestions = [
    {
        question: "What were the Washington Redskins originally called?",
        answerChoices: ["Boston Redskins", "Boston Giants", "Boston Titans", "Boston Braves"],
        correctAnswer: [3]
    },
    {
        question: "Who was the first player ever drafted by the Redskins?",
        answerChoices: ["Joe Stydahar", "Riley Smith", "Cliff Battles", "Sammy Baugh"],
        correctAnswer: [1]
    },
    {
        question: "Who was the first Washington Redskin player inducted into the NFL Hall of Fame?",
        answerChoices: ["Bill Dudley", "Turk Edwards", "Cliff Battles", "Sammy Baugh"],
        correctAnswer: [3]
    },
    {
        question: "Which of the following Super Bowls did the Washington Redskins NOT win?",
        answerChoices: ["Super Bowl XVII", "Super Bowl XVIII", "Super Bowl XXII", "Super Bowl XXVI"],
        correctAnswer: [1]
    },
    {
        question: "In what year did the Redskins move to Washington?",
        answerChoices: ["1932", "1933", "1937", "1942"],
        correctAnswer: [2]
    },
    {
        question: "How many Super Bowls have the Washington Redskins won?",
        answerChoices: ["1", "2", "3", "4"],
        correctAnswer: [2]
    },
    {
        question: "What is the name of the Redskins Stadium?",
        answerChoices: ["FedEx Field", "The Verizon Center", "Lucas Oil Stadium", "MetLife Stadium"],
        correctAnswer: [0]
    },
    {
        question: "Which of the following jersey numbers is retired?",
        answerChoices: ["3", "11", "33", "67"],
        correctAnswer: [2]
    },
    {
        question: "Who has the all-time rushing record?",
        answerChoices: ["Larry Brown", "John Riggins", "Alfred Morris", "Ladell Betts"],
        correctAnswer: [1]
    },
    {
        question: "Who has the all-time passing record?",
        answerChoices: ["Joe Theismann", "Sonny Jurgensen", "Mark Rypien", "Kirk Cousins"],
        correctAnswer: [0]
    },
    {
        question: "What is the name of the Redskins Fight Song?",
        answerChoices: ["You Like That?", "Battle of the Braves!", "Honky Tonk Hogs", "Hail to the Redskins!"],
        correctAnswer: [3]
    },
    {
        question: "Who is the current owner of the Washington Redskins?",
        answerChoices: ["Dan Snyder", "Jack Kent Cooke", "Harry Wismer", "Jerry Jones"],
        correctAnswer: [0]
    },
    {
        question: "Who is the current coach of the Washington Redskins?",
        answerChoices: ["Joe Gibbs", "Jon Gruden", "Jay Gruden", "Kyle Shanahan"],
        correctAnswer: [2]
    },
    {
        question: "Which of the following is a Redskins color?",
        answerChoices: ["black", "yellow", "burgandy", "white"],
        correctAnswer: [2]
    },
    {
        question: "Which team can be considered the Redskins GREATEST rival?",
        answerChoices: ["Pittsburgh Steelers", "Dallas Cowboys", "Seattle Seahawks", "Minnesota Vikings"],
        correctAnswer: [1]
    },
]
var picArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15'];
var currentQuestion;
var correctTotal;
var incorrectTotal;
var seconds;
var answered;
var unanswered;
var time;
var playerAnswer;
var messages = {
    correct: "Correct! You must be a true fan!",
    incorrect: "Sorry sports fan! That's not true!",
    endTime: "Time's Up",
    finished: "Alright! Let's see how you did!"
}

$("startButton").on("click", function () {
    $(this).hide();
    newGame();
});

$("#startOverButton").on("click", function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $("#scoreboard").empty();
    $("#numberCorrect").empty();
    $("#numberIncorrect").empty();
    currentQuestion = 0;
    correctTotal = 0;
    incorrectTotal = 0;
    nextQuestion();
}

function nextQuestion() {
    $("#responseToInput").empty();
    $("#correctAnswer").empty();
    $("#questionImage").empty();
    answered = true;

    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + "/" + triviaQuestions.length);
    $("#question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
    for (var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerChoices[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice");
        $(".answerChoices").append(choices);
    }
    countdown();
    $(".thisChoice").on("click", function () {
        playerAnswer = $(this).data("index");
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 10;
    $("#secondsRemaining").html("<h3>You have <h4>" + seconds + " </h4>seconds remaining!</h3>");
    answered = true;
    time = setInterval(timeOut, 1000);
}

function timeOut() {
    seconds--;
    $("#secondsRemaining").html("<h3>You have <h4>" + seconds + " </h4>seconds remaining!</h3>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage() {
    $("#currentQuestion").empty();
    $(".thisChoice").empty();
    $(".question").empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerChoices[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $("#questionImage").html('<img src = "./assets/images/' + gifArray[currentQuestion] + '.gif" width = "200px">');
    //checks to see correct, incorrect, or unanswered
    if ((playerAnswer == rightAnswerIndex) && (answered == true)) {
        correctTotal++;
        $("#responsetoInput").html(messages.correct);
    } else if ((playerAnswer != rightAnswerIndex) && (answered == true)) {
        incorrectTotal++;
        $('#responsetoInput').html(messages.incorrect);
        $('#correctAnswer').html('The correct answer was: ' + rightAnswerText);
    } else {
        $('#responsetoInput').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        answered = true;
    }

    if (currentQuestion == (triviaQuestions.length - 1)) {
        setTimeout(scoreboard, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}
function scoreboard() {
    $("secondsRemaining").empty();
    $("#responsetoInput").empty();
    $("#correctAnswer").empty();
    $("#questionImage").empty();

    $("#scoreboard").html(messages.finished);
    $("#numberCorrect").html("Correct Answers: " + correctTotal);
    $("#numberIncorrect").html("Incorrect Answers: " + incorrectTotal);
    $("#startOverButton").addClass("reset");
    $("#startOverButton").show();
    $("#startOverButton").html('Play Again?');
}


