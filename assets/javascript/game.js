function TriviaQuestion(question, arrayOfAnswers,correctAnswer){
	this.question = question;
	this.arrayOfAnswers = arrayOfAnswers;
	this.correctAnswer= correctAnswer;
}

class TriviaGame{
	constructor(arrayOfQuestions){
		this.arrayOfQuestions = arrayOfQuestions;
		this.correct = 0;
		this.wrong = 0;
		this.indexQuestion = null;
		this.currentQuestion;
	}

	get randomQuestion(){
		this.indexQuestion = Math.floor(Math.random() * this.arrayOfQuestions.length);
		this.currentQuestion = this.arrayOfQuestions[this.indexQuestion];
		return this.currentQuestion;
	}

	checkAnswer(studentAnswer){
		this.arrayOfQuestions.splice(this.indexQuestion,1);
		if (studentAnswer === this.currentQuestion.correctAnswer){
			this.correct++;
		}else{
			this.wrong++;
		}
	}

	get sizeOfQuestion(){
		return this.arrayOfQuestions.length;
	}
}

var question1 = new TriviaQuestion("A",["1","2","3","4"], "1");
var question2 = new TriviaQuestion("B",["1","2","3","4"], "2");
var question3 = new TriviaQuestion("C",["1","2","3","4"], "3");
var question4 = new TriviaQuestion("D",["1","2","3","4"], "4");
var question5 = new TriviaQuestion("E",["1","2","3","4"], "1");

var triviaGOT = new TriviaGame([question1,question2,question3,question4,question5]);

var timeAllowed = 20;
var timeLeft = timeAllowed;
var countDown; // Will be used to have setTimeout with 30 seconds, will clear when moving to next question.
var displayTime; // Will be used to have setInterval to Display time left

var updateTime = function(){
	timeLeft--;
	$("#time").html(timeLeft)
}

var timeUp = function(){
	clearInterval(displayTime);
	timeLeft = timeAllowed;
	$("#time").html(timeLeft);
	countDown = setTimeout(timeUp, 1000*timeLeft);
	displayTime = setInterval(updateTime, 1000);
	triviaGOT.checkAnswer(null);
	insertContent();
	console.log("Times Ups!")

}
var triviaQuestion;

var insertContent = function(){
		triviaQuestion = triviaGOT.randomQuestion;
		$("#question").html(triviaQuestion.question);
		$("#answer1").html(triviaQuestion.arrayOfAnswers[0]);
		$("#answer2").html(triviaQuestion.arrayOfAnswers[1]);
		$("#answer3").html(triviaQuestion.arrayOfAnswers[2]);
		$("#answer4").html(triviaQuestion.arrayOfAnswers[3]);

}


var displayResults = function(){
		$("#question").remove();
		$("#answer1").remove();
		$("#answer2").remove();
		$("#answer3").remove();
		$("#answer4").remove();
		clearTimeout(countDown);
		clearInterval(displayTime);
		$("#timer").remove();
		var resultHeader = $("<div class = 'result'>");
		resultHeader.html("<b>Results</b>");
		$(".content").append(resultHeader);
		var percent = triviaGOT.correct/(triviaGOT.correct+triviaGOT.wrong)*100;
		var ratio = $("<div class = 'ratio'>");
		ratio.html("Correct: "+ triviaGOT.correct +
			"<br>Wrong: " + triviaGOT.wrong +
			"<br>Percent: " + percent+ "%");
		$(".content").append(ratio);
}


$(document).ready(function(){

	$(".start-btn").click(function(){
		$(".start-btn").remove();
		$("#instructions").remove();
		var timer = $("<div id = 'timer'>");
		timer.html("Time Remaining: <span id='time'> "+ timeLeft + "</span> Seconds");
		$(".content").append(timer);
		countDown = setTimeout(timeUp, 1000*timeLeft);
		displayTime = setInterval(updateTime, 1000);
		var question = $("<div id = 'question'>");
		$(".content").append(question);
		var answer1 = $("<div class = 'answers' id='answer1'>");
		var answer2 = $("<div class = 'answers' id='answer2'>");
		var answer3 = $("<div class = 'answers' id='answer3'>");
		var answer4 = $("<div class = 'answers' id='answer4'>");
		$(".content").append(answer1);
		$(".content").append(answer2);
		$(".content").append(answer3);
		$(".content").append(answer4);
		insertContent();
	});


	$(".content").delegate(".answers","click",function(){
		var playerAnswer = this.textContent;
		triviaGOT.checkAnswer(playerAnswer);
		if (triviaGOT.arrayOfQuestions.length !== 1){
			insertContent();
			// Reset Timer
			timeLeft = timeAllowed;
			$("#time").html(timeLeft);
			clearTimeout(countDown);
			clearInterval(displayTime);
			countDown = setTimeout(timeUp, 1000*timeLeft);
			displayTime = setInterval(updateTime, 1000);
		}else{
			displayResults();
		}
	});


});