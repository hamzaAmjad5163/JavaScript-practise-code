// Sorted Array Search
// Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 6], k = 6
// Output: true
// Exlpanation: Since, 6 is present in the array at index 4 (0-based indexing), output is true.
// Input: arr[] = [1, 2, 4, 5, 6], k = 3
// Output: false
// Exlpanation: Since, 3 is not present in the array, output is false.
// Input: arr[] = [2, 3, 5, 6], k = 1
// Output: false
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ k ≤ 106
// 1 ≤ arr[i] ≤ 106

class Answer {
    sortedArraySearch(arr, k) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === k) {
                return true; // k is found
            } else if (arr[mid] < k) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
        return false; // k is not found
    }
}