// Spirally traversing a matrix

// You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array while traversing the matrix in spiral form.

// Examples:

// Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// Explanation:

// Input: mat[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
// Output: [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
// Explanation: Applying same technique as shown above.
// Input: mat[][] = [[32, 44, 27, 23], [54, 28, 50, 62]]
// Output: [32, 44, 27, 23, 62, 50, 28, 54]
// Explanation: Applying same technique as shown above, output will be [32, 44, 27, 23, 62, 50, 28, 54].
// Constraints:
// 1 ≤ n, m ≤1000
// 0 ≤ mat[i][j] ≤100

class Answer {
  spirallyTraverse(mat) {
    const result = [];
    if (mat.length === 0) return result;
    let top = 0;
    let bottom = mat.length - 1;
    let left = 0;
    let right = mat[0].length - 1;
    while (top <= bottom && left <= right) {
      // Traverse from left to right
      for (let i = left; i <= right; i++) {
        result.push(mat[top][i]);
      }
        top++;
        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
          result.push(mat[i][right]);
        }   
        right--;
        if (top <= bottom) {
          // Traverse from right to left
          for (let i = right; i >= left; i--) {
            result.push(mat[bottom][i]);
          }
          bottom--;
        }
        if (left <= right) {
          // Traverse from bottom to top
            for (let i = bottom; i >= top; i--) {
                result.push(mat[i][left]);
            }
            left++;
        }   
    }
    return result;
  }
}
