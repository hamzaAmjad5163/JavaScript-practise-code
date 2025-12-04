// Bottom View of Binary Tree
// You are given the root of a binary tree, and your task is to return its bottom view. The bottom view of a binary tree is the set of nodes visible when the tree is viewed from the bottom.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level order traversal is considered.

// Examples :

// Input: root = [1, 2, 3, 4, 5, N, 6]
    
// Output: [4, 2, 5, 3, 6]
// Explanation: The Green nodes represent the bottom view of below binary tree.
    
// Input: root = [20, 8, 22, 5, 3, 4, 25, N, N, 10, 14, N, N, 28, N]
    
// Output: [5, 10, 4, 28, 25]
// Explanation: The Green nodes represent the bottom view of below binary tree.
    
// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 1 ≤ node->data ≤ 10^5

class Answer{
    bottomView(root){
        if (!root) return [];
        const map = new Map();
        const queue = [];
        queue.push({node: root, hd: 0});
        let minHd = 0;
        let maxHd = 0;
        while (queue.length > 0) {
            const {node, hd} = queue.shift();
            map.set(hd, node.data);
            if (node.left) {
                queue.push({node: node.left, hd: hd - 1});
                minHd = Math.min(minHd, hd - 1);
            }
            if (node.right) {
                queue.push({node: node.right, hd: hd + 1});
                maxHd = Math.max(maxHd, hd + 1);
            }
        }
        const result = [];
        for (let hd = minHd; hd <= maxHd; hd++) {
            if (map.has(hd)) {
                result.push(map.get(hd));
            }
        }
        return result;
    }
}