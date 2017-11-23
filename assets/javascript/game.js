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
		var wins = 0
		var losses = 0 
		$("#ruby").on("click",function(){
			playerScore = playerScore + rubyNum;
			console.log("Player Score is " + playerScore);	
			if(playerScore === targetNum){
				wins = wins + 1;
				console.log("wins are " + wins);
				resetGame();
				newGame();
							
			}
			if (playerScore > targetNum){
				losses = losses + 1;
				console.log("losses are " + losses);
				resetGame();
				newGame();
			}	

		})

		$("#diamond").on("click",function(){
			playerScore = playerScore + diamondNum;
			console.log("Player Score is " + playerScore);
			if(playerScore === targetNum){
				wins = wins + 1;
				console.log("wins are " + wins);
				resetGame();
				newGame();
							
			}
			if (playerScore > targetNum){
				losses = losses + 1;
				console.log("losses are " + losses);
				resetGame();
				newGame();
			}	
		})

		$("#gold").on("click", function(){
			playerScore = playerScore + goldNum;
			console.log("Player score is " + playerScore);
			if(playerScore === targetNum){
				wins = wins + 1;
				console.log("wins are " + wins);
				resetGame();
				newGame();
							
			}
			if (playerScore > targetNum){
				losses = losses + 1;
				console.log("losses are " + losses);
				resetGame();
				newGame();
			}	
		})

		$("#emerald").on("click", function(){
			playerScore = playerScore + emeraldNum;
			console.log("Player score is " + playerScore);
			if(playerScore === targetNum){
				wins = wins + 1;
				console.log("wins are " + wins);
				resetGame();
				newGame();
							
			}
			if (playerScore > targetNum){
				losses = losses + 1;
				console.log("losses are " + losses);
				resetGame();
				newGame();
			}	
		})	
		
	}	

	var resetGame = function(){
		 targetNum = 0;
		 rubyNum = 0;
		 diamondNum = 0;
		 goldNum = 0;
		 emeraldNum = 0;
	     playerScore = 0;

	}


	

newGame();
playGame();


});
