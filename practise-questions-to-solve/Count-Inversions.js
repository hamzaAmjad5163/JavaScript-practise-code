// Count Inversions
// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum.

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
// Input: arr[] = [2, 3, 4, 5, 6]
// Output: 0
// Explanation: As the sequence is already sorted so there is no inversion count.
// Input: arr[] = [10, 10, 10]
// Output: 0
// Explanation: As all the elements of array are same, so there is no inversion count.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104

class Answer {
  inversionCount(arr) {
    const temp = Array(arr.length).fill(0);
    return this._mergeSort(arr, temp, 0, arr.length - 1);
  }
  _mergeSort(arr, temp, left, right) {
    let invCount = 0;
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      invCount += this._mergeSort(arr, temp, left, mid);
      invCount += this._mergeSort(arr, temp, mid + 1, right);
      invCount += this._merge(arr, temp, left, mid, right);
    }
    return invCount;
  }

  _merge(arr, temp, left, mid, right) {
    let i = left; // Starting index of left subarray
    let j = mid + 1; // Starting index of right subarray
    let k = left; // Starting index of to be sorted subarray
    let invCount = 0;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        invCount += mid - i + 1;
      }
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (let m = left; m <= right; m++) arr[m] = temp[m];

    return invCount;
  }
}
