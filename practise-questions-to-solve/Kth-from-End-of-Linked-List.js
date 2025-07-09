// Kth from End of Linked List
// Given the head of a linked list and the number k, Your task is to find the kth node from the end. If k is more than the number of nodes, then the output should be -1.

// Examples

// Input: LinkedList: 1->2->3->4->5->6->7->8->9, k = 2
// Output: 8
// Explanation: The given linked list is 1->2->3->4->5->6->7->8->9. The 2nd node from end is 8.

// Input: LinkedList: 10->5->100->5, k = 5
// Output: -1
// Explanation: The given linked list is 10->5->100->5. Since 'k' is more than the number of nodes, the output is -1.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 <= number of nodes <= 106
// 1 <= node->data , x <= 106
// 1 <= k <= 106

class Answer {
    getKthFromLast(head, k){
        if (!head || k <= 0) return -1; // If the list is empty or k is invalid

        let firstPointer = head;
        let secondPointer = head;

        // Move firstPointer k nodes ahead
        for (let i = 0; i < k; i++) {
            if (firstPointer === null) return -1; // If k is greater than the length of the list
            firstPointer = firstPointer.next;
        }

        // Move both pointers until firstPointer reaches the end
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        return secondPointer.data; // secondPointer now points to the kth node from the end
    }
}