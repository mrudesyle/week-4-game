// Start with declaring variables
var wins = 0;
var losses = 0;
var numberToBeat = Math.floor(Math.random() * 101) + 19;
var currentScore = 0;
var incrementVal = 1;

//declare an array to store gem id's
var gemArray = ["#gem1", "#gem2", "#gem3", "#gem4"];

//display initial declared values to use
$("#numberToBeat").text("Number to Beat: " + numberToBeat);
$("#currentScore").text(currentScore);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
// console.log("Number to Beat: " + numberToBeat);


//create for loop to progromatically assign data-attribute
//number values to each image/gem
function resetGemVals() {
  for (var i = 0; i < gemArray.length; i++) {
    //crystal variable gets gem image by id
    var crystal = $(gemArray[i]);

    //set random number between 1 and 12
    var gemVal = Math.floor(Math.random() * 12) + 1;
    // console.log("GemArray Value = " + gemArray[i]);
    // console.log("GemVal = " + gemVal);

    //set random number to each gem image in the gemArray
    crystal.attr("data-crsyVal", gemVal);

  }
}

for (var i = 0; i < gemArray.length; i++) {
  //crystal variable gets gem image by id
  var crystal = $(gemArray[i]);

  //set random number between 1 and 12
  var gemVal = Math.floor(Math.random() * 12) + 1;
  // console.log("GemArray Value = " + gemArray[i]);
  // console.log("GemVal = " + gemVal);

  //set random number to each gem image in the gemArray
  crystal.attr("data-crsyVal", gemVal);

  //also set a class to each image to steamline click events
  crystal.addClass("clss-crystal");

}


///////////add the on-click events
$(".clss-crystal").on("click", function () {
  //get data attribute value of the clicked button, once it is clicked 
  var crysVal = ($(this).attr("data-crsyVal"));

  //convert crysVal to integer, since it is currently a string
  crysVal = parseInt(crysVal);

  //increment currentScore varialbe when crystal is clicked
  currentScore += crysVal;
  $("#currentScore").text(currentScore);


  // alert("New score: " + currentScore);

  if (currentScore === numberToBeat) {
    alert("You win!");
    wins += incrementVal;
    $("#wins").text("wins: " + wins);
    reset();
  } else if (currentScore >= numberToBeat) {
    alert("You suck!! You lost :-| ");
    losses += incrementVal;
    $("#losses").text("Losses: " + losses);
    reset();
  }

  //reset number to beat & current score
  function reset() {
    numberToBeat = Math.floor(Math.random() * 101) + 19;
    currentScore = 0;
    $("#numberToBeat").text("Number to Beat: " + numberToBeat);
    $("#currentScore").text(currentScore);
    resetGemVals();
  }

});