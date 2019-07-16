// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
//
// For example, given the following matrix:
//
// [
//   [1,  2,  3,  4,  5],
//   [6,  7,  8,  9,  10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ]
//
// [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

function createMatrixFromDims(matrices, indicesPer) {
  if (
    typeof matrices !=='number'
    || matrices < 1
    || indicesPer < 1
    || matrices % 1 !== 0
    || indicesPer % 1 !== 0
  ) {
    return false
  }
  console.log(`creating Matrix of ${matrices} x ${indicesPer}`)
  let outputMatrix = []
  for (var i = 0; i < matrices; i++) {
    let matrixToAdd = []
    for (var k = 0; k < indicesPer; k++) {
      matrixToAdd.push(indicesPer * i + k + 1)
    }
    outputMatrix.push(matrixToAdd)
  }
  return outputMatrix
}

function isForwardMovementPossible(currentDirection, currentPosition) {
  // console.log('forward ok?')
  // console.log(currentDirection)
  // console.log(currentPosition)
  // console.log(currentDirection.change[currentDirection.limitedValue])
  // console.log(currentDirection.limit)
  // console.log(currentDirection.change[currentDirection.limitedValue] > 0)
  let isForwardMovementPossible = false
  if (currentDirection.change[currentDirection.limitedValue] > 0) {
    if (currentPosition[currentDirection.limitedValue] < currentDirection.limit) {
      isForwardMovementPossible = true
    }
  } else {
    if (currentPosition[currentDirection.limitedValue] > currentDirection.limit) {
      isForwardMovementPossible = true
    }
  }
  // console.log(isForwardMovementPossible ? 'forward ok.' : 'forward IMPOSSIBLE')
  return isForwardMovementPossible
}


function traverseMatrix(matrix) {
  if (!Array.isArray(matrix)) {
    return false
  }
  let solutionPath = []
  let currentPos = [0, 0]
  let movement = {
    checks: {
      moreCurrentDir: true,
      moreToTraverse: true
    },
    currentDir: 'up',
    order: ['right', 'down', 'left', 'up'],
    rules: {
      'right': {
        limit: matrix[0].length - 1,
        limitedValue: 1,
        change: [0, 1]
      },
      'down': {
        limit: matrix.length - 1,
        limitedValue: 0,
        change: [1, 0]
      },
      'left': {
        limit: 0,
        limitedValue: 1,
        change: [0, -1]
      },
      'up': {
        limit: 0,
        limitedValue: 0,
        change: [-1, 0]
      }
    }
  }

  function changeDirection(directionCurrent, directionsOrder) {
    // TODO: update limit for appropriate direction
    // console.log('direction CHANGE')
    if (movement.currentDir === 'right') {
      movement.rules[movement.currentDir].limit -= 1
    } else if (directionCurrent === 'down') {
      movement.rules[movement.currentDir].limit -= 1
    } else if (directionCurrent === 'left') {
      movement.rules[movement.currentDir].limit += 1
    } else if (directionCurrent === 'up') {
      movement.rules[movement.currentDir].limit += 1
    }
    if (directionsOrder.indexOf(directionCurrent) === directionsOrder.length - 1) {
      return directionsOrder[0]
    } else {
      return directionsOrder[directionsOrder.indexOf(directionCurrent) + 1]
    }
  }

  console.log('determining path through matrix...')
  while (movement.checks.moreToTraverse) {
    movement.checks.moreCurrentDir = true
    // console.log(`direction: ${movement.currentDir}`)
    while (movement.checks.moreCurrentDir) {
      if (solutionPath[solutionPath.length - 1] !== matrix[currentPos[0]][currentPos[1]]) {
        solutionPath.push(matrix[currentPos[0]][currentPos[1]])
      }
      // console.log(`path so far: ${solutionPath}`)
      movement.checks.moreCurrentDir = isForwardMovementPossible(movement.rules[movement.currentDir], currentPos)
      if (movement.checks.moreCurrentDir) {
        // MOVE FORWARD
        // console.log('moving forward')
        indexToChange = movement.rules[movement.currentDir].limitedValue
        // console.log(indexToChange)
        // console.log('indexToChange')
        // console.log(currentPos)
        currentPos[indexToChange] += movement.rules[movement.currentDir].change[indexToChange]
        // console.log(currentPos)
      }
    }
    movement.currentDir = changeDirection(movement.currentDir, movement.order)
    // console.log(`direction: ${movement.currentDir}`)
    movement.checks.moreToTraverse = isForwardMovementPossible(movement.rules[movement.currentDir], currentPos)
    if (!movement.checks.moreToTraverse) {
      return solutionPath
    }
  }
}




let matrixInput = createMatrixFromDims(6, 6)
if (!matrixInput) {
  console.log('Matrix could not be created with the given input.')
} else {
  console.log(matrixInput)
  let solution = traverseMatrix(matrixInput)
  console.log('solution:')
  console.log(solution)
  if (!solution) {
    console.log('Traversal path could not be created for the given input.')
  }
}
