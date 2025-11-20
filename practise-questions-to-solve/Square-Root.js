// Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

// Floor value of any number is the greatest Integer which is less than or equal to that number.

// Examples:

// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.
// Input: n = 11
// Output: 3
// Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.
// Input: n = 1
// Output: 1
// Explanation: 1 is a perfect sqaure, so its square root is 1.
// Constraints:
// 1 ≤ n ≤ 3*10^4


class Answer {
    floorSqrt(n){
        if (n == 0 || n == 1) return n;

        let start = 1, end = n, ans = 0;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (mid * mid == n) {
                return mid;
            }   
            if (mid * mid < n) {
                start = mid + 1;
                ans = mid; // Update answer to the floor value
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
}