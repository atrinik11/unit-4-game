$(document).ready(function(){
////Initializing the values............
  var guessTotal = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber = 0;
  var red = 0;
  var green = 0;
  var blue = 0;
  var yellow = 0;
  var crystalNum;

////Creating function assign() to assign the numbers to html.....................
  function assign() {
      $("#random-number").text(randomNumber);
      $("#total-score").text(guessTotal);
      $("#loss1").text(losses);
      $("#win1").text(wins);

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
  };

////Creating a reset function which will be called when the user wins or losses a game...............
    function reset() {
        guessTotal = 0;
        $("#random-number").html(randomNumber);
        $("#total-score").html(guessTotal);
    };

////Creating function work where the user guess number is added...............
    function work(crystalNum) {
        guessTotal += crystalNum;
        $("#total-score").empty();
        $("#total-score").append(guessTotal);
        if(randomNumber < guessTotal) {
            losses++;
            $("#loss1").html(losses);
            reset();
        } else if(randomNumber === guessTotal) {
            wins++;
             $("#win1").html(wins);
            reset();
        }
    };

/////////////......................FOR EASY LEVEL................................................................
  $("#easy").click(function(){
      gen1();
      assign();
      work();
      gen1();
  });
////Creating a function for generating easy random number & reset when the player wins or losses a game.
  function gen1(){
      randomNumber= Math.floor((Math.random() * 100) + 1);
      red = Math.floor((Math.random() * 100) + 1);
      green = Math.floor((Math.random() * 10) + 1);
      blue = Math.floor((Math.random() * 10) + 1);
      yellow = Math.floor((Math.random() * 10) + 1);
  };


/////////////......................FOR MEDIUM LEVEL................................................................

    $("#medium").click(function(){
        gen2();
        assign();
        work();
        gen2();
    });
    ////Creating a function for generating medium random number........
    function gen2(){
        randomNumber= Math.floor((Math.random() * 1000) + 1);
        red = Math.floor((Math.random() * 1000) + 1);
        green = Math.floor((Math.random() * 100) + 1);
        blue = Math.floor((Math.random() * 100) + 1);
        yellow = Math.floor((Math.random() * 10) + 1);
    };


/////////////......................FOR HARD LEVEL................................................................

    $("#hard").click(function(){
        gen3();
        assign();
        work();
        gen3();
    });

    ////Creating a function for generating hard random number.........
       function gen3(){
           randomNumber= Math.floor((Math.random() * 10000) + 1);
           red = Math.floor((Math.random() * 10000) + 1);
           green = Math.floor((Math.random() * 1000) + 1);
           blue = Math.floor((Math.random() * 100) + 1);
           yellow = Math.floor((Math.random() * 10) + 1);
       };

/*      if $("#hard").click() {
         gen3();
         assign();
         function work(crystalNum) {
             guessTotal += crystalNum;
             $("#total-score").empty();
             $("#total-score").append(guessTotal);
             if(randomNumber < guessTotal) {
                 losses++;
                 $("#loss1").html(losses);
                     reset3();
             } else if (randomNumber === guessTotal) {
                 wins++;
                 $("#win1").html(wins);
                 reset3();
             }
         };
       };*/

});           //////document.ready() end bracket
