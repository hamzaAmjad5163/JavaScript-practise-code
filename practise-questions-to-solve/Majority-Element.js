// Majority Element
// Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.
// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.
// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than 2/2 times, so there is no majority element.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105

class Answer {
    majorityElement(arr) {
        let count = 0;
        let candidate = null;

        // Step 1: Find a candidate
        for (let num of arr) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }

        // Step 2: Verify the candidate
        count = 0;
        for (let num of arr) {
            if (num === candidate) count++;
        }

        return count > Math.floor(arr.length / 2) ? candidate : -1;
    }
}