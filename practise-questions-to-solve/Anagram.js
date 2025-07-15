// Anagram
// Given two non-empty strings s1 and s2, consisting only of lowercase English letters, determine whether they are anagrams of each other or not. Two strings are considered anagrams if they contain the same characters with exactly the same frequencies, regardless of their order.

// Examples:

// Input: s1 = "geeks" s2 = "kseeg"
// Output: true 
// Explanation: Both the string have same characters with same frequency. So, they are anagrams. 
// Input: s1 = "allergy", s2 = "allergyy" 
// Output: false 
// Explanation: Although the characters are mostly the same, s2 contains an extra 'y' character. Since the frequency of characters differs, the strings are not anagrams. 
// Input: s1 = "listen", s2 = "lists" 
// Output: false 
// Explanation: The characters in the two strings are not the same — some are missing or extra. So, they are not anagrams.
// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 105
// s1, s2 consists of lowercase English letters.

class Answer {
    areAnagrams(s1, s2){
        if (s1.length !== s2.length) {
            return false; // If lengths differ, they cannot be anagrams
        }

        const charCount = new Map();

        // Count characters in the first string
        for (let char of s1) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }

        // Subtract counts using the second string
        for (let char of s2) {
            if (!charCount.has(char)) {
                return false; // Character not found in first string
            }
            charCount.set(char, charCount.get(char) - 1);
            if (charCount.get(char) < 0) {
                return false; // More occurrences in second string
            }
        }

        // Check if all counts are zero
        for (let count of charCount.values()) {
            if (count !== 0) {
                return false;
            }
        }

        return true; // All counts are zero, they are anagrams
    }
}