// This is for cases where a string is newline separated; 
// it is just a sample of how to work with a case where the first line of the string 
// is the number of tests (n)
// The following n lines will be related to the test, each number is space separated.
// The important bits here are as follows: 1. input.splice("\n"); 2. dataIn[i].split(" ").map(Number)

var input = "1\n5 2 1";

function processData(input) {
    var dataIn = input.split("\n");
	  var nTests = dataIn.splice(0, 1);
    nTests = parseInt(nTests, 10);

    var testCase;
    var nPrisoners, nSweets, pInitial, pLast;
	  for (var i = 0; i < nTests; i++) {
		testCase = dataIn[i].split(" ").map(Number);
        for (var j = 0; j < testCase.length; j++) {
            nPrisoners = testCase[0];
            nSweets = testCase[1];
            pInitial = testCase[2];
        }
        pLast = (nSweets + (pInitial - 1)) % nPrisoners;
        console.log((pLast !== 0) ? pLast : nPrisoners);
    }
} 
