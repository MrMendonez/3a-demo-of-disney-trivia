// Disney Trivia Game

// Welcome Page
// Get user's name
// timer
// score
// tries left counter
// We should see the first question 
// text box to write answer with submit button
// wrong message - giant x
// correct message - giant check
// win game msg - 100% emoji
// lose game msg - sad face emoji
// share your results

$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var correctAnswer1 = 'mushu';

  // Hide 
  $('#question1').hide();
  $('#correct-msg').hide();
  $('#incorrect-msg').hide();

  /*******************************************************
  Get Player's Name
  *******************************************************/

  function removeNameForm() {
    $('#name-screen').detach();
    $('#question1').show().addClass('animated slideInRight');
  }

  $('#player-name-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log('The players name is: ' + playerName);
    $('#show-player-name').text(playerName);
    $('#name-screen').addClass('animated rollOut');
    setTimeout(removeNameForm, 1000);
  });

  /*******************************************************
  Question 1
  *******************************************************/

  $('#question1-btn').on('click', function(e) {
    e.preventDefault();
    playerAnswer1 = $('#question1-input').val().trim().toLowerCase();
    console.log('The player chose the response ' + playerAnswer1);
    answerCheck1();
  })

  function answerCheck1() {
    if(playerAnswer1 === correctAnswer1) {
      console.log('Player got the answer right!');
      $('#correct-msg').show().addClass('animated slideInDown');
      $('#question1').removeClass('slideInRight').addClass('hinge');
    }
    else {
      console.log('Player got the answer wrong!');
      $('#incorrect-msg').show().addClass('animated slideInDown');
    }
  };

})