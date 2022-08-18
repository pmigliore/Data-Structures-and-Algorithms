// BIG O: O(n log(n))

// Use Case

// Quick sort is fastest, but it is not always O(N*log N), as there are worst cases where it becomes O(N2).
// Quicksort is probably more effective for datasets that fit in memory. For larger data sets it proves to be inefficient
// so algorithms like merge sort are preferred in that case.
// Quick Sort in is an in-place sort (i.e. it doesn’t require any extra storage) so it is appropriate to use it for arrays.

// Directions:
// - Call the pivot helper on the array
// - When the helper returns to you the updated index, recursively call
//   the pivot helper on the subarray to the left of that index, and the
//   subarray to the right of that index
// - Your base case occurs when you consider a subarray with less than
//   2 elements

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
