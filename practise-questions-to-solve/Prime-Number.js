// Prime Number
// Given a number n, determine whether it is a prime number or not.
// Note: A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

// Examples :

// Input: n = 7
// Output: true
// Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.
// Input: n = 25
// Output: false
// Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.
// Input: n = 1
// Output: false
// Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered prime.
// Constraints:
// 1 ≤ n ≤ 109

class Answer {
    isPrime(n) {
        if (n <= 1) return false; // 0 and 1 are not prime numbers
        if (n <= 3) return true; // 2 and 3 are prime numbers
        
        // Check for factors from 2 to the square root of n
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false; // Found a factor, so n is not prime
            }
        }
        
        return true; // No factors found, so n is prime
    }
}