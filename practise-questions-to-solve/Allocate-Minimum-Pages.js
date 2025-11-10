// Allocate Minimum Pages
// Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

// Note: If it is not possible to allocate books to all students, return -1.

// Examples:

// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// => [12] and [34, 67, 90] Maximum Pages = 191
// => [12, 34] and [67, 90] Maximum Pages = 157
// => [12, 34, 67] and [90] Maximum Pages = 113.
// The third combination has the minimum pages assigned to a student which is 113.
// Input: arr[] = [15, 17, 20], k = 5
// Output: -1
// Explanation: Since there are more students than total books, it's impossible to allocate a book to each student.

class Answer {
    findPages(arr, k) {
        // code here
        const n = arr.length;
        if (n === 0) return -1;
        if (k > n) return -1; // More students than books

        let left = Math.max(...arr); // Minimum possible maximum pages
        let right = arr.reduce((a, b) => a + b, 0);
        let result = -1;

        const isPossible = (mid) => {
            let studentCount = 1;
            let currentSum = 0;
            for (let pages of arr) {
                if (currentSum + pages > mid) {
                    studentCount++;
                    currentSum = pages;
                    if (studentCount > k) return false;
                } else {
                    currentSum += pages;
                }
            }
            return true;
        };

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (isPossible(mid)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
