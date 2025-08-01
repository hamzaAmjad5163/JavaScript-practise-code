// Detect Loop in linked list
// You are given the head of a singly linked list. Your task is to determine if the linked list contains a loop. A loop exists in a linked list if the next pointer of the last node points to any other node in the list (including itself), rather than being null.

// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// Examples:

// Input: head: 1 -> 3 -> 4, pos = 2
// Output: true
// Explanation: There exists a loop as last node is connected back to the second node.

// Input: head: 1 -> 8 -> 3 -> 4, pos = 0
// Output: false
// Explanation: There exists no loop in given linked list.

// Input: head: 1 -> 2 -> 3 -> 4, pos = 1
// Output: true
// Explanation: There exists a loop as last node is connected back to the first node.


// Constraints:
// 1 ≤ number of nodes ≤ 104
// 1 ≤ node->data ≤ 103       
// 0 ≤ pos ≤ Number of nodes in Linked List

class Answer {
    detectLoop(head){
        if (!head || !head.next) {
            return false; // If the list is empty or has only one node, no loop exists
        }

        let slow = head;
        let fast = head;

        // Use Floyd's Cycle-Finding Algorithm
        while (fast && fast.next) {
            slow = slow.next; // Move slow pointer by 1 step
            fast = fast.next.next; // Move fast pointer by 2 steps

            if (slow === fast) {
                return true; // A loop exists
            }
        }

        return false; // No loop found
    }
}