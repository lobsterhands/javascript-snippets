// For a square matrix (set in a 2d array), find the difference of the diagonals.

var a = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];
var n = 3;
function getDiagonalDifference(arr, rootN) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < rootN; i++) {
        for (var j = 0; j < rootN; j++) {
            if (i == j) {
                sum1 += a[i][j];
            }
            if (i + j == (rootN - 1)) {
                sum2 += a[i][j];
            }
        }
    }
    
    return(Math.abs(sum1 - sum2));
}

var result = getDiagonalDifference(a, n);
console.log(result);
