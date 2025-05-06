// Binary Search

// Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.

// Note: If multiple occurrences are there, please return the smallest index.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5], k = 4
// Output: 3
// Explanation: 4 appears at index 3.
// Input: arr[] = [11, 22, 33, 44, 55], k = 445
// Output: -1
// Explanation: 445 is not present.
// Input: arr[] = [1, 1, 1, 1, 2], k = 1
// Output: 0
// Explanation: 1 appears at index 0.
// Note: Try to solve this problem in constant space i.e O(1)

// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 106
// 1 <= k <= 106

class Answer {
    binarysearch(arr, k) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === k) {
                result = mid;
                right = mid - 1; // Move left to find smaller index
            } else if (arr[mid] < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
