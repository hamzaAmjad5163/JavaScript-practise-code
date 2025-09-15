// Power Of Numbers
// Given a number n, find the value of n raised to the power of its own reverse.
// Note: The result will always fit into a 32-bit signed integer.

// Examples:

// Input: n = 2
// Output: 4
// Explanation: The reverse of 2 is 2, and 22 = 4.
// Input: n = 10
// Output: 10
// Explanation: The reverse of 10 is 1 (leading zero is discarded), and 10 raised to the power 1 is 10.
// Constraints:
// 1 ≤ n ≤ 10

class Answer {
    ReverseExponentiation(n){
        const reverseNum = parseInt(n.toString().split('').reverse().join(''));
        return Math.pow(n, reverseNum);
    }}