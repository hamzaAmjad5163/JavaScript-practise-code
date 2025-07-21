// Reverse a String
// You are given a string s, and your task is to reverse the string.

// Examples:

// Input: s = "Geeks"
// Output: "skeeG"
// Input: s = "for"
// Output: "rof"
// Input: s = "a"
// Output: "a"
// Constraints:
// 1 <= s.size() <= 106
// s contains only alphabetic characters (both uppercase and lowercase).

class Answer {
    reverseString(s){
        // Convert the string to an array of characters
        const charArray = s.split('');
        
        // Initialize two pointers
        let left = 0;
        let right = charArray.length - 1;

        // Swap characters until the pointers meet
        while (left < right) {
            // Swap characters at left and right pointers
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
            left++;
            right--;
        }

        // Join the array back into a string and return it
        return charArray.join('');
    }
}