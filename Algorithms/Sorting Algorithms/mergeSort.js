// BIG O: O(n log(n))

// Use Case

// Merge sort is used when the data structure doesn’t support random access since it works with pure sequential access that is forward iterators,
// rather than random access iterators.
// It is widely used for external sorting, where random access can be very, very expensive compared to sequential access.
// It is used where it is known that the data is similar data.
// Merge sort is fast in the case of a linked list.
// It is used in the case of a linked list as in linked list for accessing any data at some index we need to traverse from the head to that
// index and merge sort accesses data sequentially and the need of random access is low.
// The main advantage of the merge sort is its stability, the elements compared equally retain their original order.

// Objective:
// Decomposes an array into smaller arrays of
// 0 or 1 elements, then building up a newly sorted array

// Directions:
// - Create an empty array, take a look at the smallest values in each
//   input array
// - While there are stiil values to look at...
//   - If the value in the first array is smaller than the value in
//     the second array, push the value in the first array into our
//     results and move on to the next value in the first array
//   - If the value in the first array is larger, push the value in
//     the second array into our results and move on to the next value in
//     second array
//   - Once we exhaust one array, push in all remaining values from the other
//     array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Directions:
// - Break up the array into halves until you have arrays that are
//   empty or have one element.
// - Once you have smaller sorted arrays, merge those arrays with
//   other sorted arrays until you are back at the full length of
//   the array
// - Once the array has been erged back together, return the merged array

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 23, 456, 645]);
