// Left View of Binary Tree
// You are given the root of a binary tree. Your task is to return the left view of the binary tree. The left view of a binary tree is the set of nodes visible when the tree is viewed from the left side.

// If the tree is empty, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, N, N]

// Output: [1, 2, 4]
// Explanation: From the left side of the tree, only the nodes 1, 2, and 4 are visible.

// Input: root[] = [1, 2, 3, N, N, 4, N, N, 5, N, N]

// Output: [1, 2, 4, 5]
// Explanation: From the left side of the tree, the nodes 1, 2, 4, and 5 are visible.

// Input: root[] = [N]
// Output: []
// Constraints:
// 0 <= number of nodes <= 106
// 0 <= node -> data <= 105

class Answer{
    leftView(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];
        let index = 0; // simulate queue using index

        while (index < queue.length) {
            let levelSize = queue.length - index;
            result.push(queue[index].data); // first node at this level

            for (let i = 0; i < levelSize; i++) {
                let node = queue[index++];

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}