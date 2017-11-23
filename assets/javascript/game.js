console.log("hello world");

$(document).ready(function (){
	
	var targetNum = 0;
	var rubyNum = 0;
	var diamondNum = 0;
	var goldNum = 0;
	var emeraldNum = 0;
	var playerScore = 0;

	var newGame = function(){

		targetNum = Math.floor(Math.random()*(120-19+1)+19);
		console.log(targetNum);

		rubyNum = Math.floor(Math.random() * 12) + 1;
		console.log(rubyNum);
		diamondNum = Math.floor(Math.random() * 12) + 1;
		console.log(diamondNum);
		goldNum = Math.floor(Math.random() * 12) + 1;
		console.log(goldNum);
		emeraldNum = Math.floor(Math.random() * 12) + 1;
		console.log(emeraldNum);
		$("#target").text(targetNum);
		$("#ruby").append(rubyNum);
		$("#diamond").append(diamondNum);
		$("#gold").append(goldNum);
		$("#emerald").append(emeraldNum);
		$("#incrementBox").text(playerScore);
	}

	var playGame = function(){
		$("#ruby").on("click",function(){
			playerScore = playerScore + rubyNum;
			console.log("Player Score is " + playerScore);	
		})

		$("#diamond").on("click",function(){
			playerScore = playerScore + diamondNum;
			console.log("Player Score is " + playerScore);
		})

		$("#gold").on("click", function(){
			playerScore = playerScore + goldNum;
			console.log("Player score is " + playerScore);
		})

		$("#emerald").on("click", function(){
			playerScore = playerScore + emeraldNum;
			console.log("Player score is " + playerScore);
		})

	}	

	


	

newGame();
playGame();

});
