// Project:     getSquareMatrixDiags()
// Author:      Lyle Denman
// Date:        22 June 2016

// Purpose: For an NxN (square) matrix in an array, return the diagonals
// of that matrix

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getSquareMatrixDiags(arr) {
    var nSquared = arr.length;
    var n = Math.sqrt(nSquared);

    var diagOne = [];
    var diagTwo = [];

    for (var j = 0; j < nSquared; j++) {
        if (j % (n+1) === 0) {
            diagOne.push(arr[j]);
        }
    }

    for (var k = (n - 1); k < (nSquared - n + 1); k += (n - 1)) {
        diagTwo.push(arr[k]);
    }

    return {diagOne: diagOne, diagTwo: diagTwo};
}

var diagonals = getSquareMatrixDiags(array);
console.log(diagonals);