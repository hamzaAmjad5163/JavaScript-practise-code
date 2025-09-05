// Add Number Linked Lists
// You are given the head of two singly linked lists head1 and head2 representing two non-negative integers. You have to return the head of the linked list representing the sum of these two numbers.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list

// Constraints:
// 1 ≤ Number of nodes in head1, head2 ≤ 105
// 0 ≤ node->data ≤ 9

class Answer {
    addTwoLists(head1, head2){
        const s1 = [], s2 = [];
        let cur = head1;
        while (cur) { s1.push(cur.data); cur = cur.next; }
        cur = head2;
        while (cur) { s2.push(cur.data); cur = cur.next; }

        let carry = 0;
        let result = null;

        // Add until both stacks empty and no carry
        while (s1.length || s2.length || carry) {
            const a = s1.length ? s1.pop() : 0;
            const b = s2.length ? s2.pop() : 0;
            const sum = a + b + carry;
            carry = Math.floor(sum / 10);
            const digit = sum % 10;

            // Create a new node and push it to the front of result
            let node;
            if (typeof Node !== 'undefined') {
                node = new Node(digit); // common in GfG environments
            } else {
                node = { data: digit, next: null }; // fallback if Node isn't defined
            }
            node.next = result;
            result = node;
        }

        // Remove leading zeros (but keep single zero if result is 0)
        while (result && result.data === 0 && result.next) {
            result = result.next;
        }

        return result;
    }
}