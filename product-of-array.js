inputArr = [1, 2, 3, 4, 5];

answerArr = [1,1,2,6,24];
answer2Arr = [120,60,20,5,1];
ansArr = [];

let runningProduct = 1;
let runningProduct2 = 1;

for (var i = 0; i < inputArr.length; i++) {
  if (i > 0) {
    runningProduct *= inputArr[i - 1];
  }
  ansArr[i] = runningProduct;
}

for (var i = inputArr.length - 1; i > -1; i++) {
  if (i < inputArr.length - 1) {
    runningProduct2 *= inputArr[i + 1];
  }
  ansArr[i] = runningProduct2;
}




// FORGET
finalArr = [120,60,40,30,24];



// runthrough:
inputArr[2] = 3
runningProduct = 2
