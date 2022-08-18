//BIG O: O(log n)
//Objective: find value in array (only if sorted)

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.round((right + left) / 2);

    if (arr[middle] === val) {
      return middle;
    } else if (val < arr[middle]) {
      right = middle;
    } else if (val > arr[middle]) {
      left = middle;
    }
  }

  return -1;
}

binarySearch([1, 2, 3, 4, 5], 2);
