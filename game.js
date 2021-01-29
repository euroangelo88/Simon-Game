  var buttonColors = ["red", "blue", "green", "yellow"];

  var gamePattern = [];

  var userClickedPattern = [];

  var level = 0;

  var started = false;


  //Level number banner

  //$("h1").text("Level "+ level);

//has the game started

$(document).keypress(function() {

  if (started === false) {

    $("#level-title").text("Level " + level);

    nextSequence();

    started = true;
}
});

//Click listener

$(".btn").click(function(e){
  var userChosenColor = e.target.id;

  userClickedPattern.push(userChosenColor)

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);

});

//Advance game if correct answer





//checking answers
//1 - right answer(if)
//2 - WRONG (else)
function checkAnswer(currentLevel) {

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
     console.log("success")

     if(userClickedPattern.length === gamePattern.length) {
       setTimeout(function() {
         nextSequence();

       }, 1000)
     }

   }
   else {
     console.log("wrong");
     $("body").addClass("game-over");

     setTimeout(function(){
       $("body").removeClass("game-over")}, 200);

    playSound("wrong");

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();


   }
}

//restart if answer is wrong
function startOver() {

level = 0;

started = false;

gamePattern = [];


}



// Game pattern creator

  function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber =  Math.floor(Math.random() * 3) + 1;

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor)

  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);


}

//Sound

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

//Press animations

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");


  setTimeout(function(){

  $("#" + currentColor).removeClass("pressed")}, 100);


}

//Start game
