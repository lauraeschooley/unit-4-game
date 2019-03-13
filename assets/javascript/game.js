$(function() {
//Selects the random # between 17 and 150 for the start of the game
var targetNumber = Math.floor(Math.random() *133 + 17);
//putting the text of the number in the empty id
$("#randomTarget").text(targetNumber);

//Setting the incraments the images are going to have
//all numbers will be in between 1-15
var num1= Math.floor(Math.random()*15+1);
var num2= Math.floor(Math.random()*15+1);
var num3= Math.floor(Math.random()*15+1);
var num4= Math.floor(Math.random()*15+1);

//setting up beginning totals

var wins = 0;
var losses = 0;
var userTotal = 0;

//putting the number in the two empty divs for wins & losses 
$("#winsNumber").text(wins);
$("#lossesNumber").text(losses);

//Lost function and what happens after
function userLosses() {
  $("#youWIN").text("You Lose!");
    //alert("You Lost! :(");
    losses++;
    $("#lossesNumber").text(losses);
    reset();
};

//win function and what happens after
function userWins () {
  $("#youWIN").text("You Win!");
    //alert("You win! :)");
    wins++;
    $("#winsNumber").text(wins);
    reset();
};

//sets up click function for the emoji buttons
$("#emojiPicOne").on ("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#usersGuess").text(userTotal); 
          //sets win/lose conditions
          $("#youWIN").text("");
        if (userTotal == targetNumber){
          userWins();
        }
        else if ( userTotal > targetNumber){
          userLosses();
        }  

});

$("#emojiPicTwo").on ("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#usersGuess").text(userTotal); 
          //sets win/lose conditions
      $("#youWIN").text("");
        if (userTotal == targetNumber){
          userWins();
        }
        else if ( userTotal > targetNumber){
          userLosses();
        }   
  }); 

  $("#emojiPicThree").on ("click", function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#usersGuess").text(userTotal); 
    $("#youWIN").text("");
        if (userTotal == targetNumber){
          userWins();
        }
        else if ( userTotal > targetNumber){
          userLosses();
        } 
  });  

  $("#emojiPicFour").on ("click", function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#usersGuess").text(userTotal);
    $("#youWIN").text("");
    if (userTotal == targetNumber){
        userWins();
      }
      else if ( userTotal > targetNumber){
        userLosses();
      }
});   

//reset function
function reset(){
    targetNumber = Math.floor(Math.random() *133 + 17); 
    $("#randomTarget").text(targetNumber);
    num1= Math.floor(Math.random()*15+1)
    num2= Math.floor(Math.random()*15+1)
    num3= Math.floor(Math.random()*15+1)
    num4= Math.floor(Math.random()*15+1)
    userTotal= 0;
    $("#usersGuess").text(userTotal);
    }
});