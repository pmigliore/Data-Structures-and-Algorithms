// BIG O: O(n^2)

// Use Case

// If the data is nearly sorted or when the list is small as it has a complexity of O(N2) and if the list is sorted a
// minimum number of elements will slide over to insert the element at it’s correct location.
// This algorithm is stable and it has fast running case when the list is nearly sorted.
// The usage of memory is a constraint as it has space complexity of O(1).

// Objective:
// A sorting algorithms similar to bubble sort,
// but instead of first placing large values into sorted position,
// it places small values into sorted position

// Directions:
// - Start by picking the second element in the array
// - Now compare the second element with the one before it and swap if
//   necessary.
// - Continue to the next element and if it is in the incorrect order,
//   iterate through the sorted portion (i.e. the left side) to place
//   the element in the correct place.
// - Repeat until the array is sorted.

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
