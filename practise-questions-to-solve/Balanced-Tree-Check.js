// Examples:

// Input: root[] = [10, 20, 30, 40, 60]

   
// Output: true
// Explanation: The height difference between the left and right subtrees at all nodes is at most 1. Hence, the tree is balanced.
// Input: root[] = [1, 2, 3, 4, N, N, N, 5]
   
// Output: false
// Explanation: The height difference between the left and right subtrees at node 2 is 2, which exceeds 1. Hence, the tree is not balanced.
// Input: root[] = [1, 2, N, N, 3]
   
// Output: false
// Explanation: The height difference between the left and right subtrees at node 1 is 2, which exceeds 1. Hence, the tree is not balanced.
// Constraints:
// 0 ≤ number of nodes ≤ 5000
// - 104 ≤ node->data ≤ 104

class Answer{
    isBalanced(root) {
        function checkBalance(node) {
            if (node === null) {
                return 0; // Height of an empty subtree is 0
            }
            const leftHeight = checkBalance(node.left);
            if (leftHeight === -1) return -1;
            const rightHeight = checkBalance(node.right);
            if (rightHeight === -1) return -1;
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1; // Not balanced
            }   
            return Math.max(leftHeight, rightHeight) + 1; // Return height
        }
        return checkBalance(root) !== -1;
    }
}