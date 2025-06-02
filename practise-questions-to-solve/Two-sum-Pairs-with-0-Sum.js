// Two sum -Pairs with 0 Sum
// Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

// Examples:

// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].
// Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
// Output: [[-6, 6],[-1, 1]]
// Explanation: The distinct pairs are [-1, 1] and [-6, 6].
// Expected Time Complexity: O(n log n)
// Expected Auxiliary Space: O(n).

// Constraints:
// 3 <= arr.size <= 105
// -105 <= arr[i] <= 105

class Answer {
    getPairs(arr) {
        const numSet = new Set();
        const result = new Set();
        
        // Sort the array first to ensure pairs are in order
        arr.sort((a, b) => a - b);
        
        for (const num of arr) {
            const complement = -num;
            if (numSet.has(complement)) {
                // Add the pair in sorted order (complement will always be <= num due to array sort)
                result.add(JSON.stringify([complement, num]));
            }
            numSet.add(num);
        }
        
        // Convert the set of stringified pairs back to arrays and sort them
        return Array.from(result)
            .map(pair => JSON.parse(pair))
            .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }
}