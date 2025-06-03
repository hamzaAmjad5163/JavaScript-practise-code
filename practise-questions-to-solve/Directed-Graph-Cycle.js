// Directed Graph Cycle
// Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
// The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

// Examples:

// Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]

// Output: true
// Explanation: The diagram clearly shows a cycle 0 → 2 → 0
// Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]

// Output: false
// Explanation: no cycle in the graph
// Constraints:
// 1 ≤ V, E ≤ 105

class Answer {
    isCyclic(V, edges) {
        const adjList = Array.from({ length: V }, () => []);
        for (const [u, v] of edges) {
            adjList[u].push(v);
        }

        const visited = new Array(V).fill(false);
        const recStack = new Array(V).fill(false);

        const dfs = (v) => {
            if (!visited[v]) {
                visited[v] = true;
                recStack[v] = true;

                for (const neighbor of adjList[v]) {
                    if (!visited[neighbor] && dfs(neighbor)) {
                        return true;
                    } else if (recStack[neighbor]) {
                        return true;
                    }
                }
            }
            recStack[v] = false;
            return false;
        };

        for (let i = 0; i < V; i++) {
            if (!visited[i] && dfs(i)) {
                return true;
            }
        }
        return false;
    }
}