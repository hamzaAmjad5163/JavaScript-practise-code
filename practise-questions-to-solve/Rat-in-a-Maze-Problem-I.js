// Rat in a Maze Problem - I
// Consider a rat placed at position (0, 0) in an n x n square matrix mat[][]. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:

// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Your task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.
// If no path exists, return an empty list.

// Note: Return the final result vector in lexicographically smallest order.

// Examples:

// Input: mat[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: mat[][] = [[1, 0], [1, 0]]
// Output: []
// Explanation: No path exists as the destination cell is blocked.
// Input: mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: ["DDRR", "RRDD"]
// Explanation: The rat has two possible paths to reach the destination: 1. "DDRR" 2. "RRDD", These are returned in lexicographically sorted order.
// Constraints:
// 2 ≤ mat.size() ≤ 5
// 0 ≤ mat[i][j] ≤ 1

class Answer {
    findPaths(mat) {
        const n = mat.length;
        const result = [];
        const path = [];
        const visited = Array.from({ length: n }, () => Array(n).fill(false));

        const isSafe = (x, y) => x >= 0 && x < n && y >= 0 && y < n && mat[x][y] === 1 && !visited[x][y];

        const solveMaze = (x, y) => {
            if (x === n - 1 && y === n - 1) {
                result.push(path.join(''));
                return;
            }

            visited[x][y] = true;

            // Move Down
            if (isSafe(x + 1, y)) {
                path.push('D');
                solveMaze(x + 1, y);
                path.pop();
            }

            // Move Up
            if (isSafe(x - 1, y)) {
                path.push('U');
                solveMaze(x - 1, y);
                path.pop();
            }

            // Move Right
            if (isSafe(x, y + 1)) {
                path.push('R');
                solveMaze(x, y + 1);
                path.pop();
            }

            // Move Left
            if (isSafe(x, y - 1)) {
                path.push('L');
                solveMaze(x, y - 1);
                path.pop();
            }

            visited[x][y] = false; // Backtrack
        };

        if (mat[0][0] === 1) {
            solveMaze(0, 0);
        }

        return result.sort(); // Return paths in lexicographically sorted order
    }
}