// K Sized Subarray Maximum
// Given an array arr[] of integers and an integer k, your task is to find the maximum value for each contiguous subarray of size k. The output should be an array of maximum values corresponding to each contiguous subarray.

// Examples:

// Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6] 
// Explanation: 
// 1st contiguous subarray = [1 2 3] max = 3
// 2nd contiguous subarray = [2 3 1] max = 3
// 3rd contiguous subarray = [3 1 4] max = 4
// 4th contiguous subarray = [1 4 5] max = 5
// 5th contiguous subarray = [4 5 2] max = 5
// 6th contiguous subarray = [5 2 3] max = 5
// 7th contiguous subarray = [2 3 6] max = 6
// Input: arr[] = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], k = 4
// Output: [10, 10, 10, 15, 15, 90, 90]
// Explanation: 
// 1st contiguous subarray = [8 5 10 7], max = 10
// 2nd contiguous subarray = [5 10 7 9], max = 10
// 3rd contiguous subarray = [10 7 9 4], max = 10
// 4th contiguous subarray = [7 9 4 15], max = 15
// 5th contiguous subarray = [9 4 15 12], max = 15
// 6th contiguous subarray = [4 15 12 90], max = 90
// 7th contiguous subarray = [15 12 90 13], max = 90
// Input: arr[] = [5, 1, 3, 4, 2, 6], k = 1
// Output: [5, 1, 3, 4, 2, 6]
// Explanation: 
// When k = 1, each element in the array is its own subarray, so the output is simply the same array
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ k ≤ arr.size()
// 0 ≤ arr[i] ≤ 109

class Answer {
    maxOfSubarrays(arr, k){
        const n = arr.length;
        if (k > n) return []; // If k is larger than the array size, return empty array

        const result = [];
        const deque = []; // This will store indices of array elements

        for (let i = 0; i < n; i++) {
            // Remove elements not in the current window
            if (deque.length && deque[0] < i - k + 1) {
                deque.shift();
            }

            // Remove elements smaller than the current element from the back
            while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
                deque.pop();
            }

            // Add current element's index to the deque
            deque.push(i);

            // If we have filled at least k elements, add the maximum to the result
            if (i >= k - 1) {
                result.push(arr[deque[0]]);
            }
        }

        return result;
    }
}