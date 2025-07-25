// Check Equal Arrays
// Given two arrays a[] and b[] of equal size, the task is to find whether the elements in the arrays are equal.

// Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.

// Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.

// Examples:

// Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
// Output: true
// Explanation: Both the array can be rearranged to [0,1,2,4,5]
// Input: a[] = [1, 2, 5], b[] = [2, 4, 15]
// Output: false
// Explanation: a[] and b[] have only one common value.
// Constraints:
// 1<= a.size(), b.size()<=107
// 0<=a[i], b[i]<=109

class Answer {
    checkEqual(a, b){
        if (a.length !== b.length) return false; // If lengths differ, arrays cannot be equal

        const countMap = new Map();

        // Count occurrences of each element in the first array
        for (const num of a) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // Decrease counts based on the second array
        for (const num of b) {
            if (!countMap.has(num)) return false; // If an element in b is not in a, they are not equal
            countMap.set(num, countMap.get(num) - 1);
            if (countMap.get(num) < 0) return false; // If count goes negative, they are not equal
        }

        return true; // All counts should be zero if arrays are equal
    }
}