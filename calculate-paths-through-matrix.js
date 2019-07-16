// How many paths exist through a given matrix of n*m starting at the top-left when the only possible moves are down and right?

console.log("running");

let N = 3;
let M = 2;

function calculatePaths(n, m) {
  console.log("calculatePaths function running");
  let rAllowance = n - 1;
  let lAllowance = m - 1;

  let totalFoundPaths = 0;
  let prevPath = [];
  let currPath = [];
  let currPos = [0, 0];
  let currTurn = 0;
  let solutionsExhausted = false;
  let currPathComplete = false;

  while (!solutionsExhausted) {
    // run current solution
    let rAllowanceCurr = rAllowance;
    let lAllowanceCurr = lAllowance;

    function isLeftAllowed() {
      // console.log(`lAllowanceCurr ${lAllowanceCurr}`);
      // console.log(`rAllowanceCurr ${rAllowanceCurr}`);
      if (lAllowanceCurr) {
        // base case for first run-through
        if (!totalFoundPaths) {
          return true;
        }
        
        return true;
      } else {
        return false;
      }
    }

    while (!currPathComplete) {
      // console.log(`currTurn ${currTurn}`);
      console.log(currPath);
      if (isLeftAllowed()) {
        currPath.push(0);
        lAllowanceCurr -= 1;
      } else {
        currPath.push(1);
        rAllowanceCurr -= 1;
      }
      currTurn += 1;
      if (currTurn > rAllowance + lAllowance) {
        currPathComplete = true;
        prevPath = currPath;
      }
    }

    // check if another solution is to be had
    solutionsExhausted = true; // ADD CONDITIONAL FOR MORE THAN ONE RUN-THROUGH OF WHILE LOOP
  }
}

calculatePaths(N, M)
