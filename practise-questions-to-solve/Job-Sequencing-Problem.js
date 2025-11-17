// Job Sequencing Problem

// You are given two arrays: deadline[], and profit[], which represent a set of jobs, where each job is associated with a deadline, and a profit. Each job takes 1 unit of time to complete, and only one job can be scheduled at a time. You will earn the profit associated with a job only if it is completed by its deadline.

// Your task is to find:

// The maximum number of jobs that can be completed within their deadlines.
// The total maximum profit earned by completing those jobs.
// Examples :

// Input: deadline[] = [4, 1, 1, 1], profit[] = [20, 10, 40, 30]
// Output: [2, 60]
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).
// Input: deadline[] = [2, 1, 2, 1, 1], profit[] = [100, 19, 27, 25, 15]
// Output: [2, 127]
// Explanation: Job1 and Job3 can be done with maximum profit of 127 (100+27).
// Input: deadline[] = [3, 1, 2, 2], profit[] = [50, 10, 20, 30]
// Output: [3, 100]
// Explanation: Job1, Job3 and Job4 can be completed with a maximum profit of 100 (50 + 20 + 30).

class Answer {
    jobSequencing(deadline, profit) {
        const n = deadline.length;

        // Build job list
        let jobs = [];
        for (let i = 0; i < n; i++) {
            jobs.push({ deadline: deadline[i], profit: profit[i] });
        }

        // Sort by profit (descending)
        jobs.sort((a, b) => b.profit - a.profit);

        // Find max deadline
        const maxDeadline = Math.max(...deadline);

        // DSU parent array: parent[i] points to the next free slot before i
        let parent = new Array(maxDeadline + 1);
        for (let i = 0; i <= maxDeadline; i++) parent[i] = i;

        // Find with path compression
        function find(slot) {
            if (parent[slot] === slot) return slot;
            return parent[slot] = find(parent[slot]);
        }

        // Union: mark a slot as occupied and link to previous slot
        function union(a, b) {
            parent[a] = b;
        }

        let count = 0;
        let totalProfit = 0;

        // Schedule jobs
        for (let job of jobs) {
            // Find best available slot ≤ deadline
            let freeSlot = find(job.deadline);

            // If freeSlot = 0, no slot available
            if (freeSlot > 0) {
                // Schedule job at this slot
                union(freeSlot, freeSlot - 1);
                count++;
                totalProfit += job.profit;
            }
        }

        return [count, totalProfit];
    }
}