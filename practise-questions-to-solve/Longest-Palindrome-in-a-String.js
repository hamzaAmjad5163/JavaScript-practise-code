// Longest Palindrome in a String

// Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right.

// Examples :

// Input: s = "anna" 
// Output: "anna"
// Explanation: "anna" is the longest palindromic substring (the entire string).
// Input: s = "abc" 
// Output: "a"
// Explanation: "a", "b" and "c" are longest palindromic substrings of same length. So, the first occurrence is returned.
// Constraints:
// 1 ≤ s.size() ≤ 103
// s consist of only lowercase English letters.

class Answer{
    longestPalindrome(s){
        let maxLength = 1; // Length of longest palindrome found
        let start = 0; // Starting index of longest palindrome
        const length = s.length;
        // Function to expand around center and check for palindromes
        const expandAroundCenter = (left, right) => {
            while (left >= 0 && right < length && s[left] === s[right]) {
                left--;
                right++;
            }
            return right - left - 1; // Length of palindrome
        };
        for (let i = 0; i < length; i++) {
            // Check for odd length palindromes
            let len1 = expandAroundCenter(i, i);
            // Check for even length palindromes
            let len2 = expandAroundCenter(i, i + 1);
            let len = Math.max(len1, len2);
            if (len > maxLength) {
                maxLength = len;
                start = i - Math.floor((len - 1) / 2);
            }
        }
        return s.substring(start, start + maxLength);
    }
}