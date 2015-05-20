//User indicates they are ready
//Randomly produced question will appear on the screen
//User answers question mentally and presses Button to have the reveal appear
//User will hit Next Question Button for more questions
//User ends session and find out # of questions answered w/ deathstar button.

//1. Random question and answer produced
//2. Create button to cover answer
//3. Reveal Answer
//4. Provide New Button for next question

//Setting inital Varibles
var randomNumber;
var question;
var answer
var count = 0;
var keepAsking = true;

//1. Random question and answer generated
  function go() {
   randomNumber = Math.floor(Math.random() * (questions.length));
   question = questions[randomNumber][0] ;
   answer =  questions[randomNumber][1] ;

//Add text to Question and Answer
     $(".quiz span").text(question);
     $(".quizAnswer span").text(answer);
//Hide Answer & Next Button
     $(".quizAnswer span").hide();
     $(".nextButton").hide();
//2. Add Button
      var newButton = $('<button></button>');
      newButton.html('Click here to show the answer!!!');
      newButton.addClass('new-button');
     $(".quizAnswer").append(newButton);
//3. When Click
     $(".new-button").click(function(){
   // Show answer
        $(this).prev().show();
   //Remove button from Answer
        $(this).remove();
   //4. Show Next button
        $(".nextButton").show().text("Next Question");
   });
  }

//PROBLEM:  Next Button Only does not continue appearing --> only appears twice
//SOLUTION WOULD BE: Have Next Button continue to reapear and continue triggering question creating function

////When Next Button clicked, new question generated
   $(".nextButton").click(function(){
      go();
//Add counter
      count += 1;
});

//Tell how many questions were asked
$(".killButton").click(function(){
   alert("You answered " + count + " questions.  Thanks for helping me learn English!");
   });
