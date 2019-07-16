function merge(arr1, arr2) {
  var result = [];
  while (arr1.length && arr2.length) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr1.shift());
  }
  return result.concat(arr1, arr2);
}
