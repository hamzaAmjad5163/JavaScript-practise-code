// Linked List Insertion At End
// You are given the head of a Singly Linked List and a value x, insert that value x at the end of the LinkedList and return the head of the modified Linked List.

// Examples :

// Input: x = 6,
   
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Explanation: We can see that 6 is inserted at the end of the linkedlist.
   
// Input: x = 1,
   
// Output: 4 -> 5 -> 1
// Explanation: We can see that 1 is inserted at the end of the linked list.
      
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 0 ≤ node->data , x ≤ 103

class Answer {
    insertAtEnd(head, x) {
        const newNode = { data: x, next: null };

        if (!head) {
            return newNode; // If the list is empty, return the new node as the head
        }

        let current = head;
        while (current.next) {
            current = current.next; // Traverse to the end of the list
        }
        current.next = newNode; // Insert the new node at the end

        return head; // Return the head of the modified list
    }
}