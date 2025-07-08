// Power of 2
// Given a non-negative integer n. You have to check if it is a power of 2 or not. 

// Examples

// Input: n = 8
// Output: true
// Explanation: 8 is equal to 2 raised to 3 (23 = 8).
// Input: n = 98
// Output: false
// Explanation: 98 cannot be obtained by any power of 2.
// Input: n = 1
// Output: true
// Explanation: (20 = 1).
// Constraints:
// 0 ≤ n < 109

class Answer {
    isPowerofTwo(n){
        if (n < 1) return false; // 0 and negative numbers are not powers of 2
        while (n > 1) {
            if (n % 2 !== 0) return false; // If n is odd, it's not a power of 2
            n = n / 2; // Divide by 2
        }
        return true; // If we reach here, n is a power of 2
    }
}