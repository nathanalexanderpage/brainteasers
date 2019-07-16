var s1 = [-30, -20, -10, -4, 3.5];
var s2 = [3, 10, 10.7, 15, 100, 101, 102, 103];
var s3 = [-5, 7, 10.3, 101, 104];
// var arrayOfSortedArrays = [];

function combineSortedArrays(a1, a2) {
  if (a1[a1.length - 1] < a2[a2.length - 1]) {
    var returnArr = a1;
    var takeFromArr = a2;
  } else {
    var returnArr = a2;
    var takeFromArr = a1;
  }
  var iterationPosR = returnArr.length - 1;
  while (takeFromArr.length > 0) {
    if (returnArr[iterationPosR] < takeFromArr[takeFromArr.length - 1]) {
      returnArr.splice(iterationPosR + 1, 0, takeFromArr.pop());
    } else {
      iterationPosR--;
    }
  }
  return returnArr;
}

console.log(combineSortedArrays(s2, s3));

// function combineArrayOfSortedArrays(arrayOfSortedArrays) {
//   var iterationPosA = arrayOfSortedArrays.length - 1;
//   while (arrayOfSortedArrays.length > 1) {
//     if (returnArr[iterationPosR] < takeFromArr[takeFromArr.length - 1]) {
//       combineSortedArrays(arrayOfSortedArrays[i + 1], arrayOfSortedArrays[i]);
//     } else {
//       iterationPosA--;
//     }
//   }
// }
//
// console.log(combineArrayOfSortedArrays(arrayOfSortedArrays));
