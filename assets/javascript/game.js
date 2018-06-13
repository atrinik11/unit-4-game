$(document).ready(function(){
  $("button").click(function() {
    $("#main").load("../index.html");
  });

  //Initializing the values............
  var guessTotal = 0;
  var wins = 0;
  var losses = 0;
  var additon = 0;
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
      green = Math.floor((Math.random() * 10) + 1);
      blue = Math.floor((Math.random() * 10) + 1);
      yellow = Math.floor((Math.random() * 10) + 1);
  };

  ///Assigning the random generated number to html..................
  gen();
  $("#random-number").html(randomNumber);
  $("#total-score").html(guessTotal);
  $("#loss1").html(losses);
  $("#win1").html(wins);

  $("#button1").click(function(){
      work(red);
  });

  $("#button2").click(function(){
      work(green);
  });

  $("#button3").click(function(){
      work(blue);
  });

  $("#button4").click(function(){
      work(yellow);
  });

  ///Displaying the value to Total Score-----------


  ////Reset function is called when the player wins or losses a game.......
  function reset() {
      gen();
      $("#random-number").html(randomNumber);
      guessTotal = 0;
      $("#total-score").html(guessTotal);
  };

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
