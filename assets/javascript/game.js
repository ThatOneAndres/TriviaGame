function TriviaQuestion(question, arrayOfAnswers,correctAnswer,webElement){
	this.question = question;
	this.arrayOfAnswers = arrayOfAnswers;
	this.correctAnswer= correctAnswer;
	this.webElement = webElement;
}

class TriviaGame{
	constructor(arrayOfQuestions){
		this.arrayOfQuestions = arrayOfQuestions;
		this.remainingQuestions = [];
		for (var i = 0 ; i < this.arrayOfQuestions.length; i++){
			this.remainingQuestions[i] = this.arrayOfQuestions[i];
		}
		this.correct = 0;
		this.wrong = 0;
		this.indexQuestion = null;
		this.currentQuestion;
	}

	get randomQuestion(){
		this.indexQuestion = Math.floor(Math.random() * this.remainingQuestions.length);
		this.currentQuestion = this.remainingQuestions[this.indexQuestion];
		return this.currentQuestion;
	}

	checkAnswer(studentAnswer){
		this.remainingQuestions.splice(this.indexQuestion,1);
		if (studentAnswer === this.currentQuestion.correctAnswer){
			this.correct++;
			return true;
		}else{
			this.wrong++;
			return false;
		}
	}

	resetGame(){
		this.correct = 0;
		this.wrong = 0;
		for (var i = 0 ; i < this.arrayOfQuestions.length; i++){
			this.remainingQuestions[i] = this.arrayOfQuestions[i];
		}
	}

	get sizeOfQuestion(){
		return this.remainingQuestions.length;
	}
}

var question1 = new TriviaQuestion('Name the "other" Stark child: Robb, Brandon, Sansa, Arya, Jon Snow and ...?',["Rickon","Dickon","Theon","Eddard"], "Rickon",
	'<iframe src="https://giphy.com/embed/MILN274JotMME" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gotedit-rickon-stark-gotrickonstark-MILN274JotMME">via GIPHY</a></p>');

var question2 = new TriviaQuestion("What is the name of Jon Snow's Direwolf?",["Grey Wind","Graham","Ghost","Garhamel"], "Ghost",
	'<iframe src="https://giphy.com/embed/OW3XTmLPnEWmQ" width="480" height="327" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-ghost-jon-snow-OW3XTmLPnEWmQ">via GIPHY</a></p>');

var question3 = new TriviaQuestion("Which one of these is not a Great House? House...",["Targaryen","Stark","Uzumaki","Forrester"], "Uzumaki",
	'<img src="https://images.vexels.com/media/users/3/78080/raw/f02f5be3428b70b121a86d7c67662e1d-game-of-thrones-houses.jpg" style = "width: 500px">');

var question4 = new TriviaQuestion("Before departing to Braavos, Arya was given a coin and a phrase. What was the phrase?",["Dracarys","Valar Morghulis","Shekh Ma Shieraki Anni","Valar Dohaeris"], "Valar Morghulis",
	'<iframe src="https://giphy.com/embed/c1oP0AunRfP7a" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-spiderman-maisie-williams-c1oP0AunRfP7a">via GIPHY</a></p>');

var question5 = new TriviaQuestion('Who said "I drink and I know things"?',["Tyrion","Cersei","Robert","Bronn"], "Tyrion",
	'<iframe src="https://giphy.com/embed/8pScFa92iZOkE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/i-know-8pScFa92iZOkE">via GIPHY</a></p>');

var question6 = new TriviaQuestion('Who has Margaery Tyrell NOT been bethrothed to?', ["Tommen Baratheon", "Renly Baratheon","Stannis Baratheon", "Joffrey Baratheon"],"Stannis Baratheon",
	'<iframe src="https://giphy.com/embed/qf1S370w70inS" width="480" height="392" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-gif-margaery-tyrell-qf1S370w70inS">via GIPHY</a></p>');

var question7 = new	TriviaQuestion("Which of Daenerys Targaryen's three dragons are the largest?", ["Rhaegal","Drogon","Viserion","Balerion"],"Drogon",
	'<iframe src="https://giphy.com/embed/VO4fmLnLYYz0Q" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-drogon-VO4fmLnLYYz0Q">via GIPHY</a></p>');

var question8 = new TriviaQuestion("What is NOT part of the Night's Watch vows?", ["Win No Glory", "Take No Wife", "Kill No Innocent", "Father No Children"],"Kill No Innocent",
	"<img src = 'http://www.thinkgeek.com/images/products/additional/large/1aa8_nights_watch.jpg' style = 'width: 500px'>");

var question9 = new TriviaQuestion("Who is NOT on Arya Stark's list?", ["Varys", "Ilyn Pain", "Cersei Lannister", "Joffrey Baratheon"], "Varys",
	'<iframe src="https://giphy.com/embed/sDkV3cGgWKtR6" width="480" height="244" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/arya-stark-sDkV3cGgWKtR6">via GIPHY</a></p>');

var question10 = new TriviaQuestion("What does Khal Drogo call ships?", ["Leaky Tents","Moving Cities", "Wooden Horses", "Evil Magic"], "Wooden Horses",
	'<iframe src="https://giphy.com/embed/G2tvzsfhIfymY" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/khal-drogo-G2tvzsfhIfymY">via GIPHY</a></p>');

var triviaGOT = new TriviaGame([question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]);

var timeAllowed = 30;
var timeLeft = timeAllowed;
var countDown; // Will be used to have setTimeout with 30 seconds, will clear when moving to next question.
var displayTime; // Will be used to have setInterval to Display time left

var updateTime = function(){
	timeLeft--;
	$("#time").html(timeLeft)
}

var checkEnd =function(){
	if (triviaGOT.remainingQuestions.length >= 1){
		$("#answer1").css("display","block");
		$("#answer2").css("display","block");
		$("#answer3").css("display","block");
		$("#answer4").css("display","block");
		insertContent();
	}else{
		displayResults();
	}
}


var timeUp = function(){
	clearInterval(displayTime);
	$("#question").html("Time ran out! Remember you only have "+ timeAllowed+ " seconds!");
	var correctDisplay = $("<div id = 'correct-display'>");
	var gif = $("<div id = 'gif'>");
	correctDisplay.html("The correct answer is " + triviaGOT.currentQuestion.correctAnswer);
	gif.html(triviaGOT.currentQuestion.webElement);
	$(".content").append(correctDisplay);
	$(".content").append(gif);
	$("#answer1").css("display","none");
	$("#answer2").css("display","none");
	$("#answer3").css("display","none");
	$("#answer4").css("display","none");
	setTimeout(function(){
		gif.remove()
		correctDisplay.remove();
		triviaGOT.checkAnswer(null);
		checkEnd();
	}, 1000*5);
}
var triviaQuestion;

var insertContent = function(){
	timeLeft = timeAllowed;
	$("#time").html(timeLeft);
	displayTime = setInterval(updateTime, 1000);
	countDown = setTimeout(timeUp, 1000*timeLeft);
	triviaQuestion = triviaGOT.randomQuestion;
	$("#question").html(triviaQuestion.question);
	$("#question").css("background-color","blue");
	$("#answer1").html(triviaQuestion.arrayOfAnswers[0]);
	$("#answer2").html(triviaQuestion.arrayOfAnswers[1]);
	$("#answer3").html(triviaQuestion.arrayOfAnswers[2]);
	$("#answer4").html(triviaQuestion.arrayOfAnswers[3]);

}

var resetGame = function(){
	triviaGOT.resetGame();
	$(".result").remove();
	$(".ratio").remove();
	$(".reset").remove();
	$("#answer1").css("display","block");
	$("#answer2").css("display","block");
	$("#answer3").css("display","block");
	$("#answer4").css("display","block");
	insertContent();
}

var displayResults = function(){
	$("#question").css("display","none");
	$("#timer").css("display","none");
	var resultHeader = $("<div class = 'result'>");
	resultHeader.html("<b>Results</b>");
	$(".content").append(resultHeader);
	var percent = triviaGOT.correct/(triviaGOT.correct+triviaGOT.wrong)*100;
	var ratio = $("<div class = 'ratio'>");
	var reset = $("<button class = 'btn btn-danger reset'>")
	reset.html("Reset");
	ratio.html("Correct: "+ triviaGOT.correct +
		"<br>Wrong: " + triviaGOT.wrong +
		"<br>Percent: " + percent+ "%");
	$(".content").append(ratio);
	$(".content").append(reset);
	$(".reset").click(function(){
		$("#question").css("display","block");
		$("#question").css("background-color","blue");
		$("#timer").css("display","block");
		resetGame();
	});
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
		var correctDisplay = $("<div id = 'correct-display'>");
		var gif = $("<div id = 'gif'>");
		if (triviaGOT.checkAnswer(playerAnswer)){
			$("#question").html("Awesome, Correct!");
			$("#question").css("background-color","green");
			correctDisplay.html("");
		}
		else{
			$("#question").html("Oops! That was the wrong answer!");
			$("#question").css("background-color","red");
			correctDisplay.html("The correct answer is " + triviaGOT.currentQuestion.correctAnswer);
		}
		gif.html(triviaGOT.currentQuestion.webElement);
		$(".content").append(correctDisplay);
		$(".content").append(gif);
		$("#answer1").css("display","none");
		$("#answer2").css("display","none");
		$("#answer3").css("display","none");
		$("#answer4").css("display","none");
		setTimeout(function(){
			gif.remove()
			correctDisplay.remove();
			checkEnd();
		}, 5000);

	});

	$(".mute-btn").on("click",function(){
		$("#GoT-theme").prop("muted", true);
		$(".mute-btn").css("display","none");
		$(".unmute-btn").css("display","block");
	});

	$(".unmute-btn").on("click",function(){
		$("#GoT-theme").prop("muted", false);
		$(".unmute-btn").css("display","none");
		$(".mute-btn").css("display","block");
	});


});