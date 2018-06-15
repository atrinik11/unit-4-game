$(document).ready(function(){
    //Initializing the values............
  var guessTotal = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber = 0;
  var red = 0;
  var green = 0;
  var blue = 0;
  var yellow = 0;
  var crystalNum;

  ////Creating a function for generating random number to be displayed on windows to be guessed and for the 4 crystals.

  function gen(){
      randomNumber= Math.floor((Math.random() * 100) + 1);
      red = Math.floor((Math.random() * 10) + 1);
      green = Math.floor((Math.random() * 12) + 1);
      blue = Math.floor((Math.random() * 10) + 2);
      yellow = Math.floor((Math.random() * 12) + 2);
  };

  ///Assigning the random generated number to html..................
  gen();
  $("#random-number").text(randomNumber);
  $("#total-score").text(guessTotal);
  $("#loss1").text(losses);
  $("#win1").text(wins);

  $("#button1").on("click", function(){
      work(red);
  });

  $("#button2").on("click", function(){
      work(green);
  });

  $("#button3").on("click", function(){
      work(blue);
  });

  $("#button4").on("click", function(){
      work(yellow);
  });

  ////Reset function is called when the player wins or losses a game.......
  function reset() {
      gen();
      $("#random-number").html(randomNumber);
      guessTotal = 0;
      $("#total-score").html(guessTotal);
  };

///Creating a work function where the addition of all 4 crystal values are
//done and sum total is assign to guessTotal. Then the comparision of
//computer random number and the guessTotal number is done.
  function work(crystalNum) {
      guessTotal += crystalNum;
      $("#total-score").empty();
      $("#total-score").append(guessTotal);
      if(randomNumber < guessTotal) {
          losses++;
          $("#loss1").html(losses);
              reset();
      } else if (randomNumber === guessTotal) {
          wins++;
          $("#win1").html(wins);
          reset();
      }
  };

});
