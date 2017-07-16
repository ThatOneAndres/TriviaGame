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
			return true;
		}else{
			this.wrong++;
			return false;
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

var timeAllowed = 10;
var timeLeft = timeAllowed;
var countDown; // Will be used to have setTimeout with 30 seconds, will clear when moving to next question.
var displayTime; // Will be used to have setInterval to Display time left

var updateTime = function(){
	timeLeft--;
	$("#time").html(timeLeft)
}

var timeUp = function(){
	clearInterval(displayTime);
	$("#question").html("Time ran out! Remember you only have "+ timeAllowed+ " seconds!");
	var correctDisplay = $("<div id = 'correct-display'>");
	var gif = $("<div id = 'gif'>");
	correctDisplay.html("The correct answer is " + triviaGOT.currentQuestion.correctAnswer);
	gif.html("Insert GIF Here");
	$(".content").append(correctDisplay);
	$(".content").append(gif);
	$("#answer1").css("display","none");
	$("#answer2").css("display","none");
	$("#answer3").css("display","none");
	$("#answer4").css("display","none");
	setTimeout(function(){
		$("#answer1").css("display","block");
		$("#answer2").css("display","block");
		$("#answer3").css("display","block");
		$("#answer4").css("display","block");
		gif.remove()
		correctDisplay.remove();
		triviaGOT.checkAnswer(null);
		insertContent();
	}, 5000);


}
var triviaQuestion;

var insertContent = function(){
		timeLeft = timeAllowed;
		$("#time").html(timeLeft);
		displayTime = setInterval(updateTime, 1000);
		countDown = setTimeout(timeUp, 1000*timeLeft);
		triviaQuestion = triviaGOT.randomQuestion;
		$("#question").html(triviaQuestion.question);
		$("#answer1").html(triviaQuestion.arrayOfAnswers[0]);
		$("#answer2").html(triviaQuestion.arrayOfAnswers[1]);
		$("#answer3").html(triviaQuestion.arrayOfAnswers[2]);
		$("#answer4").html(triviaQuestion.arrayOfAnswers[3]);

}


var displayResults = function(){
		$("#question").remove();
		$("#answers").remove();
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

	setInterval(function(){
		var randomNum = Math.floor(Math.random()*5 + 1);
		var backImage = "url('assets/images/GOT" + randomNum + ".jpg')";
		$("body").css("background-image", backImage);
	},1000*20)

	$(".start-btn").click(function(){
		$(".start-btn").remove();
		$("#instructions").remove();
		var timer = $("<div id = 'timer'>");
		timer.html("Time Remaining: <span id='time'> "+ timeLeft + "</span> Seconds");
		$(".content").append(timer);
		var question = $("<div id = 'question'>");
		$(".content").append(question);
		var answer1 = $("<button class = 'btn btn-default answers' id='answer1'>");
		var answer2 = $("<button class = 'btn btn-default answers' id='answer2'>");
		var answer3 = $("<button class = 'btn btn-default answers' id='answer3'>");
		var answer4 = $("<button class = 'btn btn-default answers' id='answer4'>");
		$(".content").append(answer1);
		$(".content").append(answer2);
		$(".content").append(answer3);
		$(".content").append(answer4);
		insertContent();
	});


	$(".content").delegate(".answers","click",function(){
		var playerAnswer = this.textContent;
		clearTimeout(countDown);
		clearInterval(displayTime);
		console.log(playerAnswer);
		console.log(triviaGOT.currentQuestion.correctAnswer);
		var correctDisplay = $("<div id = 'correct-display'>");
		var gif = $("<div id = 'gif'>");
		if (triviaGOT.checkAnswer(playerAnswer)){
			$("#question").html("Awesome, Correct!");
			correctDisplay.html("");
		}
		else{
			$("#question").html("Oops! That was the wrong answer!");
			correctDisplay.html("The correct answer is " + triviaGOT.currentQuestion.correctAnswer);
		}
		gif.html("Insert GIF Here");
		$(".content").append(correctDisplay);
		$(".content").append(gif);
		$("#answer1").css("display","none");
		$("#answer2").css("display","none");
		$("#answer3").css("display","none");
		$("#answer4").css("display","none");
		setTimeout(function(){
			if (triviaGOT.arrayOfQuestions.length > 1){
				$("#answer1").css("display","block");
				$("#answer2").css("display","block");
				$("#answer3").css("display","block");
				$("#answer4").css("display","block");
				gif.remove()
				correctDisplay.remove();
				insertContent();
				// Reset Timer
			}else{
				displayResults();
			}
		}, 5000);

	});


});