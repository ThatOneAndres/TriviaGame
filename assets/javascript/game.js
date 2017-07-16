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
	}

	get randomQuestion(){
		this.indexQuestion = Math.floor(Math.random() * this.arrayOfQuestions.length);
		this.currentQuestion = this.arrayOfQuestions[randomNum];
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

$(document).ready(function(){


	
	$(".start-btn").click(function(){
		$(".start-btn").remove();
		$("#instructions").remove();
	});


});