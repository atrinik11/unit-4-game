
////Initializing the values............
  var guessTotal = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber = 0;
  var red = 0;
  var green = 0;
  var blue = 0;
  var yellow = 0;
  var crystalNum = 0;

  $(document).ready(function(){

////Creating a reset function which will be called when the user wins or losses a game...............
    function reset() {
        guessTotal = 0;
        $("#random-number").text(randomNumber);
        $("#total-score").text(guessTotal);
    };

////Creating function work where the user guess number is added...............
    function work(crystalNum) {
      console.log("hello");
        guessTotal += crystalNum;
        console.log(typeof crystalNum);     ///console output undefined
        console.log(typeof guessTotal);    ///console output NaN
        $("#total-score").empty();
        $("#total-score").append(guessTotal);
        if(randomNumber < guessTotal) {
            losses++;
            $("#loss1").text(losses);
            reset();
        } else if(randomNumber === guessTotal) {
            wins++;
             $("#win1").text(wins);
            reset();
        }
    };

////Creating function assign() to assign the numbers to html.....................
    function assign() {
        $("#random-number").text(randomNumber);
        console.log("hello world");
          //console.log( typeof randomNumber);
          $("#total-score").text(guessTotal);
          //console.log( typeof guessTotal);
          $("#loss1").text(losses);
          $("#win1").text(wins);

          $("#button1").on("click", function(){
              work(red);
              console.log(red);
              //console.log(typeof red);
          });

          $("#button2").click(function(){
              work(green);
              console.log(green);
          });

          $("#button3").click(function(){
              work(blue);
              console.log(blue);
          });

          $("#button4").click(function(){
              work(yellow);
              console.log(yellow);
          });
      };

/////////////......................FOR EASY LEVEL................................................................
  $("#easy").on("click", function(){
      $("#easy").fadeOut(1000);
      $("#medium").fadeIn(1000);
      $("#hard").fadeIn(1000);
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
      $("#medium").fadeOut(1000);
      $("#easy").fadeIn(1000);
      $("#hard").fadeIn(1000);
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
      $("#hard").fadeOut(1000);
      $("#medium").fadeIn(1000);
      $("#easy").fadeIn(1000);
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

});           //////document.ready() end bracket
