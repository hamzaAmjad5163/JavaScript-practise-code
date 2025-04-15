// Second Largest
// Difficulty: EasyAccuracy: 26.72%Submissions: 1.1MPoints: 2Average Time: 15m
// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105

// 1. Find the largest element in the array.
class answer {
    findSecondLargest(arr) {
      let largest = -1;
      let secondLargest = -1;
  
      for (let num of arr) {
        if (num > largest) {
          secondLargest = largest;
          largest = num;
        } else if (num > secondLargest && num < largest) {
          secondLargest = num;
        }
      }
  
      return secondLargest === -1 ? -1 : secondLargest;
    }
  }
  
  const solution = new answer();
  
  console.log(solution.findSecondLargest([12, 35, 1, 10, 34, 1])); // Output: 34
  console.log(solution.findSecondLargest([10, 5, 10]));            // Output: 5
  console.log(solution.findSecondLargest([10, 10, 10]));           // Output: -1
  