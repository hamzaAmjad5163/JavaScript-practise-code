// Find triplets with zero sum
// Given an array arr[] of integers, determine whether it contains a triplet whose sum equals zero. Return true if such a triplet exists, otherwise, return false.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1]
// Output: true
// Explanation: The triplet [0, -1, 1] has a sum equal to zero.
// Input: arr[] = [1, 2, 3]
// Output: false
// Explanation: No triplet with a sum of zero exists.
// Input: arr[] = [-5, 3, 2, -1, 0, 1]
// Output: true
// Explanation: The triplet [-5, 3, 2] has a sum equal to zero.
// Constraints:
// 1 ≤ arr.size() ≤ 103
// -106 ≤ arr[i] ≤ 106

class Answer {
    findTriplets(arr){
        const n = arr.length;
        // Sort the array to use two-pointer technique
        arr.sort((a, b) => a - b);
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right];
                if (sum === 0) {
                    return true; // Triplet found
                }
                if (sum < 0) {
                    left++; // Move left pointer to the right to increase sum
                } else {
                    right--; // Move right pointer to the left to decrease sum
                }
            }
        }
        return false; // No triplet found
    }
}