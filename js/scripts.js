//business logic
// function Player(player, roll, turn, tempTotal) = {
//   this.players = players;
//   this.roll = roll;
//   this.turn = turn;
//   this.tempTotal = tempTotal;
// }
//                               make roll button trigger var roll
//
// roll random math
var roll = Math.floor((Math.random() * 5) +1);

//user interface logic
$(document).ready(function() {
  $('.nameInput').submit(function(event) {
      event.preventDefault();
      var playerOne = $("input#playerOne").val();
      var playerTwo = $("input#playerTwo").val();
      $('.game').show();
      $('.nameInput').hide();




 $(".playerOneName").append(playerOne);
 $(".playerTwoName").append(playerTwo);
 $(".currentRoll").append(roll);
 $(".tempTotal").append(tempTotal);

// $('#roll').onclick(function() {
  $(".roll").append(roll);
// });
// console.log("test");
    });
  });
