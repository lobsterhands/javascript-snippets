var A = [ 14, 5, 17, 34, 42, 63, 17, 25, 39, 61, 97, 55, 33, 96, 62, 32, 98, 77, 35 ];
var B = 1;

function shiftArray(A, B){
	if (B === 0 || B % A.length === 0) { return A; }
	
	var arr = [];
  for (var i = 0; i < A.length; i++) {
 		arr[i] = A[(i + B) % A.length];
  }
  return arr;
}
	
shiftArray(A, B);
