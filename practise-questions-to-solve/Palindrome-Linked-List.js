// Palindrome Linked List
// Given a head singly linked list of positive integers. You have to check if the given linked list is palindrome or not.

// Examples:

// Input: head: 1 -> 2 -> 1 -> 1 -> 2 -> 1
// Output: true
// Explanation: The given linked list is 1 -> 2 -> 1 -> 1 -> 2 -> 1 , which is a palindrome and Hence, the output is true.

// Input: head: 1 -> 2 -> 3 -> 4
// Output: false
// Explanation: The given linked list is 1 -> 2 -> 3 -> 4, which is not a palindrome and Hence, the output is false.

// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 103

class Answer{
    isPalindrome(head) {
        if (!head || !head.next) return true;

        // Find the middle of the linked list
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second half of the linked list
        let prev = null, curr = slow;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        // Compare the first half and the reversed second half
        let left = head, right = prev;
        while (right) {
            if (left.data !== right.data) return false;
            left = left.next;
            right = right.next;
        }

        return true;
    }
}