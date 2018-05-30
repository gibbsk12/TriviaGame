$(document).ready(function () {
    var questionNumber = 0; //tracks the question that we are on
    var seconds = 15; //players will have 15 seconds to answer the question
    var correctTotal = 0; //the number of correct answers
    var incorrectTotal = 0; //the number of incorrect answers

    //Question, Answer, Image Object
    var triviaQuestions = [
        {
            question: "What were the Washington Redskins originally called?",
            answerChoices: ["Boston Redskins", "Boston Giants", "Boston Titans", "Boston Braves"],
            correctAnswer: "Boston Braves",
            image: "<img src = 'assets/images/question1.jpg' width='200px'>"
        },
        {
            question: "Who was the first player ever drafted by the Redskins?",
            answerChoices: ["Joe Stydahar", "Riley Smith", "Cliff Battles", "Sammy Baugh"],
            correctAnswer: "Riley Smith",
            image: "<img src = 'assets/images/question2.jpg' width='200px'>"
        },
        {
            question: "Who was the first Washington Redskin player inducted into the NFL Hall of Fame?",
            answerChoices: ["Bill Dudley", "Turk Edwards", "Cliff Battles", "Sammy Baugh"],
            correctAnswer: "Sammy Baugh",
            image: "<img src = 'assets/images/question3.jpg' width='200px'>"
        },
        {
            question: "Which of the following Super Bowls did the Washington Redskins NOT win?",
            answerChoices: ["Super Bowl XVII", "Super Bowl XVIII", "Super Bowl XXII", "Super Bowl XXVI"],
            correctAnswer: "Super Bowl XVIII",
            image: "<img src = 'assets/images/question4.jpg' width='200px'>"
        },
        {
            question: "In what year did the Redskins move to Washington?",
            answerChoices: ["1932", "1933", "1937", "1942"],
            correctAnswer: "1937",
            image: "<img src = 'assets/images/question5.jpg' width='200px'>"
        },
        {
            question: "How many Super Bowls have the Washington Redskins won?",
            answerChoices: ["1", "2", "3", "4"],
            correctAnswer: "3",
            image: "<img src = 'assets/images/question6.jpg' width='200px'>"
        },
        {
            question: "What is the name of the Redskins Stadium?",
            answerChoices: ["FedEx Field", "The Verizon Center", "Lucas Oil Stadium", "MetLife Stadium"],
            correctAnswer: "FedEx Field",
            image: "<img src = 'assets/images/question7.jpg' width='200px'>"
        },
        {
            question: "Which of the following jersey numbers is retired?",
            answerChoices: ["3", "11", "33", "67"],
            correctAnswer: "33",
            image: "<img src = 'assets/images/question8.jpg' width='200px'>"
        },
        {
            question: "Who has the all-time rushing record?",
            answerChoices: ["Larry Brown", "John Riggins", "Alfred Morris", "Ladell Betts"],
            correctAnswer: "John Riggins",
            image: "<img src = 'assets/images/question9.jpg' width='200px'>"
        },
        {
            question: "Who has the all-time passing record?",
            answerChoices: ["Joe Theismann", "Sonny Jurgensen", "Mark Rypien", "Kirk Cousins"],
            correctAnswer: "Joe Theismann",
            image: "<img src = 'assets/images/question10.jpg' width='200px'>"
        },
        {
            question: "What is the name of the Redskins Fight Song?",
            answerChoices: ["You Like That?", "Battle of the Braves!", "Honky Tonk Hogs", "Hail to the Redskins!"],
            correctAnswer: "Hail to the Redskins",
            image: "<img src = 'assets/images/question11.jpg' width='200px'>"
        },
        {
            question: "Who is the current owner of the Washington Redskins?",
            answerChoices: ["Dan Snyder", "Jack Kent Cooke", "Harry Wismer", "Jerry Jones"],
            correctAnswer: "Dan Snyder",
            image: "<img src = 'assets/images/question12.jpg' width='200px'>"
        },
        {
            question: "Who is the current coach of the Washington Redskins?",
            answerChoices: ["Joe Gibbs", "Jon Gruden", "Jay Gruden", "Kyle Shanahan"],
            correctAnswer: "Jay Gruden",
            image: "<img src = 'assets/images/question13.jpg' width='200px'>"
        },
        {
            question: "Which of the following is a Redskins color?",
            answerChoices: ["black", "yellow", "burgandy", "white"],
            correctAnswer: "burgandy",
            image: "<img src = 'assets/images/question14.jpg' width='200px'>"
        },
        {
            question: "Which team can be considered the Redskins GREATEST rival?",
            answerChoices: ["Pittsburgh Steelers", "Dallas Cowboys", "Seattle Seahawks", "Minnesota Vikings"],
            correctAnswer: "Dallas Cowboys",
            image: "<img src = 'assets/images/question15.jpg' width='200px'>"
        },]

    function addQuestionToScreen() {
        $("#questionScreen").append(
            "<h4>" + triviaQuestions[questionNumber].question +
            "</h4><p class='choices'>" + triviaQuestions[questionNumber].answerChoices[0] +
            "</p><p class='choices'>" + triviaQuestions[questionNumber].answerChoices[1] +
            "</p><p class='choices'>" + triviaQuestions[questionNumber].answerChoices[2] +
            "</p><p class='choices'>" + triviaQuestions[questionNumber].answerChoices[3] + "</p>")
    }

    function answerIsCorrect() {
        $("#questionScreen").html("<p>That's right, sports fan!</p>");
        correctTotal++;
        var correctAnswerChoice = triviaQuestions[questionNumber].correctAnswer;
        $("#questionScreen").append("<p>The correct answer was " + correctAnswerChoice +".<br>"+ triviaQuestions[questionNumber].image);
        setTimeout(nextQuestion, 3000);
        questionNumber++;
    }

    function answerIsWrong() {
        $("#questionScreen").html("<p>That's not quite right!</p>");
        incorrectTotal++;
        var correctAnswerChoice = triviaQuestions[questionNumber].correctAnswer;
        $("#questionScreen").append("<p>The correct answer was " + correctAnswerChoice + triviaQuestions[questionNumber].image);
        setTimeout(nextQuestion, 3000);
        questionNumber++;
    }

    function noAnswerTimeUp() {
        if (seconds === 0) {
            $("#questionScreen").html("<p>Time's Up!</p>");
            incorrectTotal++;
            var correctAnswerChoice = triviaQuestions[questionNumber].correctAnswer;
            $("#questionScreen").append("<p>The correct answer was " + correctAnswerChoice + triviaQuestions[questionNumber].image);
            setTimeout(nextQuestion, 3000);
            questionNumber++;
        }
    }

    function showResults() {
        if (correctTotal === triviaQuestions.length) {
            var message = "Perfect Score! You are a true Skins fan!";
        } else if (correctTotal > incorrectTotal) {
            var message = "Not too bad! Keep working!";
        } else {
            var message = "Are you sure you're not a Cowboys' fan?";
        }
        $("#gameScreen").html("<h4>" + message
            + "</h4><p>You had " + correctTotal + " correct answers.</p><p>You had"
            + incorrectTotal + "wrong answers.</p>");
        $("#gameScreen").append("<h1 id = 'start'>Play Again?</h1>");
        gameReset();
        $("#start").click(nextQuestion);
    }

    function timer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (seconds < 1) {
                clearInterval(clock);
                noAnswerTimeUp();
            } else if (seconds > 0) {
                seconds--;
            }
            $("#timer").html(seconds);
        }
    }

    function nextQuestion(){
        if (questionNumber < triviaQuestions.length){
            seconds = 15; 
            $("#questionScreen").html("<p>You have " + seconds + " seconds left.</p>");
            timer();
            noAnswerTimeUp();
        }
        else {
            showResults();
        }
    }

    function gameReset(){
        questionNumber = 0;
        correctTotal = 0;
        incorrectTotal = 0; 
    }

    function startGame(){
        $("#gameScreen").html("<p>You have" + time + "seconds left.</p>");
        $("#start").hide();
        addQuestionToScreen();
        timer();
        noAnswerTimeUp();
    }

    $("#start").click(nextQuestion);

    $("#gameScreen").on("click", ".answerChoices", (function(){
        var userGuess = $(this).text();
        if (userGuess === triviaQuestions[questionNumber].correctAnswer){
            clearInterval(clock);
            answerIsCorrect();
        }else{
            clearInterval(clock);
            answerIsWrong();
        }
    }))

});
