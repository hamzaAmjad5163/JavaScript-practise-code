// Triplet Sum in Array
// Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.

// Return true if such a triplet exists, otherwise, return false.

// Examples: 

// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13
// Output: true 
// Explanation: The triplet {1, 4, 8} sums up to 13.
// Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10
// Output: true 
// Explanation: The triplets {1, 3, 6} and {1, 2, 7} both sum to 10. 
// Input: arr[] = [40, 20, 10, 3, 6, 7], target = 24
// Output: false 
// Explanation: No triplet in the array sums to 24.
// Constraints:
// 3 ≤ arr.size() ≤ 5*103
// 0 ≤ arr[i], target ≤ 105

class Answer {
    tripletSum(arr, target) {
        arr.sort((a, b) => a - b); // Sort the array
        const n = arr.length;
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                const currentSum = arr[i] + arr[left] + arr[right];
                if (currentSum === target) {
                    return true; // Triplet found
                }
                if (currentSum < target) {
                    left++; // Move left pointer to the right
                } else {
                    right--; // Move right pointer to the left
                }
            }
        }
        return false; // No triplet found
    }
}