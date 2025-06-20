// Largest Element in Array
// Given an array arr[]. The task is to find the largest element and return it.

// Examples:

// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.
// Input: arr[] = [5, 5, 5, 5]
// Output: 5
// Explanation: The largest element of the given array is 5.
// Input: arr[] = [10]
// Output: 10
// Explanation: There is only one element which is the largest.
// Constraints:
// 1 <= arr.size()<= 106
// 0 <= arr[i] <= 106

class Answer {
    largestElement(arr) {
        if (arr.length === 0) return null; // Handle empty array case

        let maxElement = arr[0]; // Initialize with the first element
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i]; // Update maxElement if current element is larger
            }
        }
        return maxElement; // Return the largest element found
    }
}