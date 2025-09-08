// Number of occurrence
// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

// Examples :

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: target = 4 is not present in the given array so the output is 0.
// Input: arr[] = [8, 9, 10, 12, 12, 12], target = 12
// Output: 3
// Explanation: target = 12 occurs 3 times in the given array so the output is 3.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
// 1 ≤ target ≤ 106

class Answer {
    countFreq(arr, target) {
        const n = arr.length;

        // helper: find first occurrence of target
        function firstOccurrence() {
            let low = 0, high = n - 1, ans = -1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (arr[mid] === target) {
                    ans = mid;
                    high = mid - 1; // keep searching left
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return ans;
        }

        // helper: find last occurrence of target
        function lastOccurrence() {
            let low = 0, high = n - 1, ans = -1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (arr[mid] === target) {
                    ans = mid;
                    low = mid + 1; // keep searching right
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return ans;
        }

        let first = firstOccurrence();
        if (first === -1) return 0; // target not found
        let last = lastOccurrence();
        return last - first + 1;
    }
}
