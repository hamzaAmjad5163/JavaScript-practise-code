// 0 - 1 Knapsack Problem
// Given n items, each with a specific weight and value, and a knapsack with a capacity of W, the task is to put the items in the knapsack such that the sum of weights of the items <= W and the sum of values associated with them is maximized. 

// Note: You can either place an item entirely in the bag or leave it out entirely. Also, each item is available in single quantity.

// Examples :

// Input: W = 4, val[] = [1, 2, 3], wt[] = [4, 5, 1] 
// Output: 3
// Explanation: Choose the last item, which weighs 1 unit and has a value of 3.
// Input: W = 3, val[] = [1, 2, 3], wt[] = [4, 5, 6] 
// Output: 0
// Explanation: Every item has a weight exceeding the knapsack's capacity (3).
// Input: W = 5, val[] = [10, 40, 30, 50], wt[] = [5, 4, 2, 3] 
// Output: 80
// Explanation: Choose the third item (value 30, weight 2) and the last item (value 50, weight 3) for a total value of 80.
// Constraints:
// 2 ≤ val.size() = wt.size() ≤ 103
// 1 ≤ W ≤ 103
// 1 ≤ val[i] ≤ 103
// 1 ≤ wt[i] ≤ 103

class Answer {
    knapsack(W, val, wt) {
        const n = val.length;
        const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

        // Build the dp table
        for (let i = 1; i <= n; i++) {
            for (let w = 0; w <= W; w++) {
                if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + val[i - 1]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        return dp[n][W];
        
    }
}