$(document).ready(function () {
	var questionNumber = 0; //tracks the question that we are on
	var time = 15; //players will have 15 seconds to answer the question
	var correctTotal = 0; //the number of correct answers
	var incorrectTotal = 0; //the number of incorrect answers
	var triviaQuestions = [{ //Question, Answer, Image Object 
		question: "What were the Washington Redskins originally called?",
		answerChoices: ["Boston Redskins", "Boston Giants", "Boston Titans", "Boston Braves"],
		correctAnswer: "Boston Braves",
		image: "<img src = 'assets/images/question1.jpg' width='200px'>"
	}, {
		question: "Who was the first player ever drafted by the Redskins?",
		answerChoices: ["Joe Stydahar", "Riley Smith", "Cliff Battles", "Sammy Baugh"],
		correctAnswer: "Riley Smith",
		image: "<img src = 'assets/images/question2.jpg' width='200px'>"
	}, {
		question: "Who was the first Washington Redskin player inducted into the NFL Hall of Fame?",
		answerChoices: ["Bill Dudley", "Turk Edwards", "Cliff Battles", "Sammy Baugh"],
		correctAnswer: "Sammy Baugh",
		image: "<img src = 'assets/images/question3.jpg' width='200px'>"
	}, {
		question: "Which of the following Super Bowls did the Washington Redskins NOT win?",
		answerChoices: ["Super Bowl XVII", "Super Bowl XVIII", "Super Bowl XXII", "Super Bowl XXVI"],
		correctAnswer: "Super Bowl XVIII",
		image: "<img src = 'assets/images/question4.jpg' width='200px'>"
	}, {
		question: "In what year did the Redskins move to Washington?",
		answerChoices: ["1932", "1933", "1937", "1942"],
		correctAnswer: "1937",
		image: "<img src = 'assets/images/question5.jpg' width='200px'>"
	}, {
		question: "How many Super Bowls have the Washington Redskins won?",
		answerChoices: ["1", "2", "3", "4"],
		correctAnswer: "3",
		image: "<img src = 'assets/images/question6.jpg' width='200px'>"
	}, {
		question: "What is the name of the Redskins Stadium?",
		answerChoices: ["FedEx Field", "The Verizon Center", "Lucas Oil Stadium", "MetLife Stadium"],
		correctAnswer: "FedEx Field",
		image: "<img src = 'assets/images/question7.jpg' width='200px'>"
	}, {
		question: "Which of the following jersey numbers is retired?",
		answerChoices: ["3", "11", "33", "67"],
		correctAnswer: "33",
		image: "<img src = 'assets/images/question8.jpg' width='200px'>"
	}, {
		question: "Who has the all-time rushing record?",
		answerChoices: ["Larry Brown", "John Riggins", "Alfred Morris", "Ladell Betts"],
		correctAnswer: "John Riggins",
		image: "<img src = 'assets/images/question9.jpg' width='200px'>"
	}, {
		question: "Who has the all-time passing record?",
		answerChoices: ["Joe Theismann", "Sonny Jurgensen", "Mark Rypien", "Kirk Cousins"],
		correctAnswer: "Joe Theismann",
		image: "<img src = 'assets/images/question10.jpg' width='200px'>"
	}, {
		question: "What is the name of the Redskins Fight Song?",
		answerChoices: ["You Like That?", "Battle of the Braves!", "Honky Tonk Hogs", "Hail to the Redskins!"],
		correctAnswer: "Hail to the Redskins!",
		image: "<img src = 'assets/images/question11.jpg' width='200px'>"
	}, {
		question: "Who is the current owner of the Washington Redskins?",
		answerChoices: ["Dan Snyder", "Jack Kent Cooke", "Harry Wismer", "Jerry Jones"],
		correctAnswer: "Dan Snyder",
		image: "<img src = 'assets/images/question12.jpg' width='200px'>"
	}, {
		question: "Who is the current coach of the Washington Redskins?",
		answerChoices: ["Joe Gibbs", "Jon Gruden", "Jay Gruden", "Kyle Shanahan"],
		correctAnswer: "Jay Gruden",
		image: "<img src = 'assets/images/question13.jpg' width='200px'>"
	}, {
		question: "Which of the following is a Redskins color?",
		answerChoices: ["black", "yellow", "burgundy", "white"],
		correctAnswer: "burgundy",
		image: "<img src = 'assets/images/question14.jpg' width='200px'>"
	}, {
		question: "Which team can be considered the Redskins GREATEST rival?",
		answerChoices: ["Pittsburgh Steelers", "Dallas Cowboys", "Seattle Seahawks", "Minnesota Vikings"],
		correctAnswer: "Dallas Cowboys",
		image: "<img src = 'assets/images/question15.jpg' width='200px'>"
	},]

	// Adds the question and the progress bar to the screen
	function addQuestionToScreen() {
		$("#questionScreen").append("<p><strong>" +
			triviaQuestions[questionNumber].question +
			"</p><p class='choices'>" +
			triviaQuestions[questionNumber].answerChoices[0] +
			"</p><p class='choices'>" +
			triviaQuestions[questionNumber].answerChoices[1] +
			"</p><p class='choices'>" +
			triviaQuestions[questionNumber].answerChoices[2] +
			"</p><p class='choices'>" +
			triviaQuestions[questionNumber].answerChoices[3] +
			"</strong></p>" +
			"<p>Game Progress:</p>"+
			'<div class="progress w-100"><div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="' + questionNumber + '" aria-valuemin="0" aria-valuemax="15"></div></div>'
		); 
		//Sets the progress bar to the question number
		var progressBarVisible = Math.floor((questionNumber / 15) * 100);
		$('.progress-bar').css("width", progressBarVisible + '%');
	}
	// This function is called when the answer is correct. 
	function playerGetsItRight() {
		$("#questionScreen").html("<p>You got it!</p>");
		correctTotal++;
		var correctAnswer = triviaQuestions[questionNumber].correctAnswer;
		$("#questionScreen").append("<p>The answer was <span class='answer'>" +
			correctAnswer +
			"</span>.</p>" +
			triviaQuestions[questionNumber].image);
		setTimeout(nextQuestion, 4000);
		questionNumber++;
	}
	// This function is called when the answer is incorrect.
	function playerGetsItWrong() {
		$("#questionScreen").html("<p>Sorry, that's not correct.</p>");
		incorrectTotal++;
		var correctAnswer = triviaQuestions[questionNumber].correctAnswer;
		$("#questionScreen").append("<p>The answer was <span class='answer'>" +
			correctAnswer +
			"</span>.</p>" +
			triviaQuestions[questionNumber].image);
		setTimeout(nextQuestion, 4000);
		questionNumber++;
	}
	// This function is called when time is up.
	function playerRunsOutOfTime() {
		if (time === 0) {
			$("#questionScreen").html("<p>Time's Up!</p>");
			incorrectTotal++;
			var correctAnswer = triviaQuestions[questionNumber].correctAnswer;
			$("#questionScreen").append("<p>The answer was <span class='answer'>" +
				correctAnswer +
				"</span>.</p>" +
				triviaQuestions[questionNumber].image);
			setTimeout(nextQuestion, 4000);
			questionNumber++;
		}
	}
	// Final Screen that asks if player wants to play again.
	function finalScoreboard() {
		if (correctTotal === triviaQuestions.length) {
			var endMessage = "Perfect Score! You're a true sports fan! ";
		}
		else if (correctTotal > incorrectTotal) {
			var endMessage = "Nice job!";
		}
		else {
			var endMessage = "Are you sure you're not a Cowboys fan?";
		}
		$("#questionScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" +
			correctTotal + "</strong> right.</p>" +
			"<p>You got <strong>" + incorrectTotal + "</strong> wrong.</p>");
		$("#questionScreen").append("<h1 id='start'>Play Again?</h1>");
		gameReset();
		$("#start").click(nextQuestion);
	}
	// Sets timer to 15 seconds and counts it down
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				playerRunsOutOfTime();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}
	// Sets up the next question 
	function nextQuestion() {
		if (questionNumber < triviaQuestions.length) {
			time = 15;
			$("#questionScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			addQuestionToScreen();
			timer();
			playerRunsOutOfTime();
		}
		else {
			finalScoreboard();
		}
	}
	//Resets the game for player to play again
	function gameReset() {
		questionNumber = 0;
		correctTotal = 0;
		incorrectTotal = 0;
	}
	//Initial Game Start
	function startGame() {
		$("#questionScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
		$("#start").hide();
		addQuestionToScreen();
		timer();
		playerRunsOutOfTime();
	}
	//Checks to see if answer was correct or incorrect
	$("#start").click(nextQuestion); 
	$("#questionScreen").on("click", ".choices", (function () {
		var userGuess = $(this).text();
		if (userGuess === triviaQuestions[questionNumber].correctAnswer) {
			clearInterval(clock);
			playerGetsItRight();
		}
		else {
			clearInterval(clock);
			playerGetsItWrong();
		}
	}));
});
