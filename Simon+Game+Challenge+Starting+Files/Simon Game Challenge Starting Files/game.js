let buttonColours=["red", "blue", "green", "yellow"]
let gamePattern=[]
let userClickedPattern=[]
let level = 0;
let started = false;


const nextSequence=()=>{
     randomNumber=Math.floor(Math.random()*4);


let randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour)
console.log(gamePattern)

userClickedPattern = [];
$("#" +randomChosenColour).fadeOut(100).fadeIn(100)
   playSound(randomChosenColour)
   level++;
   $("h1").text("level"+level)
}
;
$(".btn").click(function() {
 
  let userChosenColour = $(this).attr("id");
   playSound(userChosenColour)
  animatePress(userChosenColour);
  
  $("#" + userChosenColour).fadeOut(100).fadeIn(100);
  userClickedPattern.push(userChosenColour)
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
});
let playSound=(name)=>{

let aud=name+".mp3"
let audio=new Audio("./sounds/" + aud)
audio.play()

}

let animatePress = (currentColour) => {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level)
    nextSequence();
    started = true;
  }
});
let checkAnswer=(currentLevel)=>{
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);}}
else{
  console.log("wrong")
  let audiowrong=new Audio("./sounds/wrong.mp3")
  audiowrong.play()
  $("body").addClass("game-over")
  startOver()
  setTimeout(() => {
  $("body").removeClass("game-over");
}, 200)
  $("h1").text("game Over, Press Any Key to Restart")
}}
  function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
