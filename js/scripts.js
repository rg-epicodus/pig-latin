// Business Logic Goes Here
var vowels = ["a","e","i","o"];

var space = " ";

var emptyArray = [];

var ay = "ay";

var way = "way";

// Display each word of the input into an array
function getWord(word) {
  for(i=0; i<word.length; i++) {
  var test = word[0];
  var displayTest = test.split();
  console.log(displayTest);
}
}

// User Interface Logic Goes Here

$(document).ready(function() {
  $("#result").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val().split(" ");


    getWord(input);



//    $("#result").show();
  });
});

//Address Qu
//Address U
