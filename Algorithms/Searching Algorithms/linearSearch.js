//BIG O: O(n)
//Objective: find value in array

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([32, 1, 2, 45, 6], 100);
