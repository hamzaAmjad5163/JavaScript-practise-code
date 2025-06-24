// Union of 2 Sorted with Duplicates
// Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

// Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
// Examples:

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: 1 2 3 4 5 6 7
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
// Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
// Output: 1 2 3 4 5
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
// Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
// Output: 1 2
// Explanation: Distinct elements including both the arrays are: 1 2.
// Constraints:
// 1  <=  a.size(), b.size()  <=  105
// -109  <=  a[i] , b[i]  <=  109


class Answer {
    unionOfSortedArrays(a, b) {
        const result = [];
        let i = 0, j = 0;

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                if (result.length === 0 || result[result.length - 1] !== a[i]) {
                    result.push(a[i]);
                }
                i++;
            } else if (a[i] > b[j]) {
                if (result.length === 0 || result[result.length - 1] !== b[j]) {
                    result.push(b[j]);
                }
                j++;
            } else {
                // Both are equal
                if (result.length === 0 || result[result.length - 1] !== a[i]) {
                    result.push(a[i]);
                }
                i++;
                j++;
            }
        }

        // Add remaining elements from a
        while (i < a.length) {
            if (result.length === 0 || result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }
            i++;
        }

        // Add remaining elements from b
        while (j < b.length) {
            if (result.length === 0 || result[result.length - 1] !== b[j]) {
                result.push(b[j]);
            }
            j++;
        }

        return result;
    }
}