// BIG O: O(n^2)

// Use Case

// It works well with large datasets where the items are almost sorted because it takes only one iteration to detect whether the
// list is sorted or not. But if the list is unsorted to a large extend then this algorithm holds good for small datasets or lists.
// This algorithm is fastest on an extremely small or nearly sorted set of data.

// Objective:
// a straight - forward comparison sort algorithm that continuously
// compares adjacent indexes and swaps them if they are out of order

// Directions:
// - Store looping from with a variable called i the end of the array
//   towards the beginning.
// - Start an inner loop with a variable called j from the beginning until
//   i - 1.
// - If arr[j] is greater than arr[j + 1], swap those two values.
// - Return the sorted array.

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
