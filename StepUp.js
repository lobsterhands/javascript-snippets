// Project:     StepUp()
// Author:      Lyle Denman

// Write a function that takes an integer for an argument and prints
// steps climbing up from left to right. There will be n steps.
// For example, StepUp(3) prints:
//   #
//  ##
// ###

function StepUp(n) {
    var message = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i + j >= n-1) {
                message += '#'; 
            } else {
                message += ' ';
            }
        }
        console.log(message);
        message = '';
    }
}
StepUp(6);
