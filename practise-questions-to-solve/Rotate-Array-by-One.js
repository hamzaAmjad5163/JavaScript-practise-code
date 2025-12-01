// Rotate Array by One
// Given an array arr, rotate the array by one position in clockwise direction.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
// Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
// Output: [3, 9, 8, 7, 6, 4, 2, 1]
// Explanation: After rotating clock-wise 3 comes in first position.
// Constraints:
// 1<=arr.size()<=10^5
// 0<=arr[i]<=10^5

class Answer{
    rotate(arr){
        // code here
        if (arr.length === 0) return arr; // Handle empty array case
        let lastElement = arr[arr.length - 1]; // Store the last element
        // Shift elements to the right
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = lastElement; // Place the last element at the front
        return arr;
    }
}