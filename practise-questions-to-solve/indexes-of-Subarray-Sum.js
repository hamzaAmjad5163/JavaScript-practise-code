// Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

// Note: If no such array is possible then, return [-1].

// Examples:

// Input: arr[] = [1, 2, 3, 7, 5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
// Output: [1, 5]
// Explanation: The sum of elements from 1st to 5th position is 15.
// Input: arr[] = [5, 3, 4], target = 2
// Output: [-1]
// Explanation: There is no subarray with sum 2.
// Constraints:
// 1 <= arr.size()<= 106
// 0 <= arr[i] <= 103
// 0 <= target <= 109

class Solution {
    subarraySum(arr, target) {
        let n = arr.length;
        let left = 0;
        let currentSum = 0;

        for (let right = 0; right < n; right++) {
            currentSum += arr[right];
            
            // Shrink the window from the left while currentSum > target
            while (currentSum > target && left <= right) {
                currentSum -= arr[left];
                left++;
            }
            
            // Check if we've found the target sum
            if (currentSum === target) {
                return [left + 1, right + 1]; // 1-based indexing
            }
        }
        
        return [-1]; // No subarray found
    }
}

// Example usage:
const solution = new Solution();

// Test Case 1
console.log(solution.subarraySum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]

// Test Case 2
console.log(solution.subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // Output: [1, 5]

// Test Case 3
console.log(solution.subarraySum([5, 3, 4], 2)); // Output: [-1]