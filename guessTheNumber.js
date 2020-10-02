let number = prompt("Please Guess the number between 1 to 10");
let randomNumber = Math.floor(Math.random()*10);
if(randomNumber == number){
	console.log("good Work");
}else{
	console.log("try again");
}