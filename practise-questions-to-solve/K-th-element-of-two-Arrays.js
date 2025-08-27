// K-th element of two Arrays
// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

// Examples :

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
// Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
// Output: 10
// Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.
// Constraints:
// 1 ≤ a.size(), b.size() ≤ 106
// 1 ≤ k ≤ a.size() + b.size()
// 0 ≤ a[i], b[i] ≤ 108

class Answer {
    kthElement(arr1, arr2, k) {
        let i = 0; // Pointer for arr1
        let j = 0; // Pointer for arr2
        let count = 0; // Count of elements processed

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                count++;
                if (count === k) {
                    return arr1[i];
                }
                i++;
            } else {
                count++;
                if (count === k) {
                    return arr2[j];
                }
                j++;
            }
        }

        // If there are remaining elements in arr1
        while (i < arr1.length) {
            count++;
            if (count === k) {
                return arr1[i];
            }
            i++;
        }

        // If there are remaining elements in arr2
        while (j < arr2.length) {
            count++;
            if (count === k) {
                return arr2[j];
            }
            j++;
        }

        return -1; // If k is out of bounds
    }
}