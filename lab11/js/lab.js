// index.js - Lab 11 JavaScript
/*
 * Author: Tyler Small
 * Created: 11 Nov 2024
 * 
 * License: Public Domain/Use
*/

// Sorts the characters into alphabetical order from the string.
function sortString(inputString) {
  // Now we convert our string to an array and then back again so we can sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();

  // now sort it
  const userNameSorted = sortString(userName);

  // append a new div for our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});