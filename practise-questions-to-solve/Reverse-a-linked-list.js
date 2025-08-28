// Reverse a linked list
// You are given the head of a singly linked list. You have to reverse the linked list and return the head of the reversed list.

       
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105

class Answer {
    reverseList(head) {
        let prev = null;
        let current = head;
        let next = null;

        while (current !== null) {
            // Store the next node
            next = current.next;
            // Reverse the current node's pointer
            current.next = prev;
            // Move pointers one position ahead
            prev = current;
            current = next;
        }
        return prev; // New head of the reversed list
    }
}