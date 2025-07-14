// Largest subarray with 0 sum
// Given an array arr[] containing both positive and negative integers, the task is to find the length of the longest subarray with a sum equals to 0.

// Note: A subarray is a contiguous part of an array, formed by selecting one or more consecutive elements while maintaining their original order.

// Examples:

// Input: arr[] = [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5
// Explanation: The longest subarray with sum equals to 0 is [-2, 2, -8, 1, 7].
// Input: arr[] = [2, 10, 4]
// Output: 0
// Explanation: There is no subarray with a sum of 0.
// Input: arr[] = [1, 0, -4, 3, 1, 0]
// Output: 5
// Explanation: The longest subarray with sum equals to 0 is [0, -4, 3, 1, 0]
// Constraints:
// 1 ≤ arr.size() ≤ 106
// −103 ≤ arr[i] ≤ 103

class Answer {
     maxLength(arr){
        const sumMap = new Map();
        let maxLength = 0;
        let currentSum = 0;

        for (let i = 0; i < arr.length; i++) {
            currentSum += arr[i];

            // If currentSum is 0, we found a subarray from the start
            if (currentSum === 0) {
                maxLength = i + 1;
            }

            // If currentSum has been seen before, calculate the length of the subarray
            if (sumMap.has(currentSum)) {
                const previousIndex = sumMap.get(currentSum);
                maxLength = Math.max(maxLength, i - previousIndex);
            } else {
                // Store the first occurrence of the currentSum
                sumMap.set(currentSum, i);
            }
        }

        return maxLength;
     }
}