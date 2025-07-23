// Palindrome String
// You are given a string s. Your task is to determine if the string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.

// Examples :

// Input: s = "abba"
// Output: true
// Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.
// Input: s = "abc" 
// Output: false
// Explanation: "abc" does not read the same forwards and backwards, so it is not a palindrome.
// Input: s = "a"
// Output: true
// Explanation: A single-character string is always a palindrome.
// Input: s = "acbca"
// Output: true
// Explanation: "acbca" reads the same forwards and backwards, so it is a palindrome.
// Constraints:
// 1 ≤ s.size() ≤ 106
// The string s contains only lowercase letters (a-z).

class Answer {
    isPalindrome(s) {
        // Initialize two pointers
        let left = 0;
        let right = s.length - 1;

        // Check characters from both ends towards the center
        while (left < right) {
            if (s[left] !== s[right]) {
                return false; // Not a palindrome if characters don't match
            }
            left++;
            right--;
        }

        return true; // If all characters matched, it is a palindrome
    }
}