// Missing And Repeating
// Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

// Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and smallest positive missing number is 1.
// Input: arr[] = [1, 3, 3] 
// Output: [3, 2]
// Explanation: Repeating number is 3 and smallest positive missing number is 2.
// Input: arr[] = [4, 3, 6, 2, 1, 1]
// Output: [1, 5]
// Explanation: Repeating number is 1 and the missing number is 5.
// Constraints:
// 2 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ arr.size()

class Answer {
    findTwoElement(arr) {
        let n=arr.length;
        let sum=n*(n+1)/2;
        for(let i=0;i<n;i++){
            if(arr[Math.abs(arr[i])-1]<0){
                ans[0]=Math.abs(arr[i]);
            }else{
                arr[Math.abs(arr[i])-1]=-arr[Math.abs(arr[i])-1];
            }
        }
        for(let i=0;i<n;i++){
            if(sum>arr[i]){
                sum-=arr[i];
            }
        }
        ans[1]=sum;
        return ans;
        
    }
}