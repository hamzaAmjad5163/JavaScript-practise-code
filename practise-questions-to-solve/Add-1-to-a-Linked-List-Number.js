// Add 1 to a Linked List Number
// You are given a linked list where each element in the list is a node and have an integer data. You need to add 1 to the number formed by concatinating all the list node numbers together and return the head of the modified linked list. 

// Note: The head represents the first element of the given array.

// Examples :

// Input: LinkedList: 4->5->6
// Output: 457

// Explanation: 4->5->6 represents 456 and when 1 is added it becomes 457. 
// Input: LinkedList: 1->2->3
// Output: 124
 
// Explanation:  1->2->3 represents 123 and when 1 is added it becomes 124. 
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= len(list) <= 10^5
// 0 <= list[i] <= 9

class Answer {
    addOne(node) {
        // code here
        let carry = 1; // Initialize carry as 1 since we are adding 1
        let current = node;
        let prev = null;
        let stack = [];

        // Push all nodes onto the stack to reverse the order
        while (current) {
            stack.push(current);
            current = current.next;
        }
        // Process the stack
        while (stack.length > 0) {
            let topNode = stack.pop();
            let sum = topNode.data + carry;
            topNode.data = sum % 10;
            carry = Math.floor(sum / 10);
            prev = topNode;
        }   
        // If there's still a carry, we need to add a new node at the front
        if (carry > 0) {
            let newNode = new Node(carry);
            newNode.next = node;
            node = newNode;
        }
        return node;
    }
}