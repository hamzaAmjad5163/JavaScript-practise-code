// Undirected Graph Cycle
// Given an undirected graph with V vertices and E edges, represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge between vertices u and v, determine whether the graph contains a cycle or not.

// Examples:

// Input: V = 4, E = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]]
// Output: true
// Explanation: 
 
// 1 -> 2 -> 0 -> 1 is a cycle.
// Input: V = 4, E = 3, edges[][] = [[0, 1], [1, 2], [2, 3]]
// Output: false
// Explanation: 
 
// No cycle in the graph.
// Constraints:
// 1 ≤ V ≤ 105
// 1 ≤ E = edges.size() ≤ 105

class Answer {
    isCycle(V, edges) {
        const parent = new Array(V);
        for (let i = 0; i < V; i++) {
            parent[i] = i;
        }
        
        const find = (u) => {
            if (parent[u] !== u) {
                parent[u] = find(parent[u]); // Path compression
            }
            return parent[u];
        };
        
        for (const [u, v] of edges) {
            const rootU = find(u);
            const rootV = find(v);
            if (rootU === rootV) {
                return true; // Cycle detected
            }
            parent[rootU] = rootV; // Union the sets
        }
        
        return false;
    }
}