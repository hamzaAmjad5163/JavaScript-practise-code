// Kth Smallest
// Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.
// Input: arr[] = [2, 3, 1, 20, 15], k = 4
// Output: 15
// Explanation: 4th smallest element in the given array is 15.
// Constraints:
// 1 <= arr.size <= 106
// 1<= arr[i] <= 106
// 1 <= k <= n

class Answer {
    kthSmallest(arr, k) {
        function quickSelect(left, right, kSmallest) {
            if (left === right) return arr[left];
            
            // Choose random pivot
            const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
            const pivotFinalIndex = partition(left, right, pivotIndex);

            if (kSmallest === pivotFinalIndex) {
                return arr[kSmallest];
            } else if (kSmallest < pivotFinalIndex) {
                return quickSelect(left, pivotFinalIndex - 1, kSmallest);
            } else {
                return quickSelect(pivotFinalIndex + 1, right, kSmallest);
            }
        }

        function partition(left, right, pivotIndex) {
            const pivotValue = arr[pivotIndex];
            // Move pivot to end
            [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
            let storeIndex = left;

            for (let i = left; i < right; i++) {
                if (arr[i] < pivotValue) {
                    [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
                    storeIndex++;
                }
            }
            [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
            return storeIndex;
        }

        return quickSelect(0, arr.length - 1, k - 1);
    }
}
