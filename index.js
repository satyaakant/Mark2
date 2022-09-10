var colors= require('colors')
var readlineSync= require("readline-sync");
var score=0;
var userName= readlineSync.question("What is your name ");
console.log(("wellcome to DO YOU KNOW MARVEL "+ userName).blue);
console.log("Lets begin the quiz " .blue);
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are right :)".green);
    score++
  }
  else{
    console.log("you are wrong :(".red);
    score--
  }
  console.log("your score is: " + score)
}
play("who wears a black eyepatch ","nick furry");
play("where vison died ","wakanda");
play("who killed father of tony stark ","bucky");
play("who broke thor hammer ","hela");
play("what was name of thor's brother ","loki");
console.log("your final score is: "+ score);
