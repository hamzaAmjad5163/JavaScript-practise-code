// Smallest Positive Missing
// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.
// Constraints:  
// 1 ≤ arr.size() ≤ 105
// -106 ≤ arr[i] ≤ 106

class Answer {
    missingNumber(arr){
        let n=arr.length;
        let i=0;
        while(i<n){
            if(arr[i]>0 && arr[i]<=n && arr[arr[i]-1]!=arr[i]){
                let temp=arr[arr[i]-1];
                arr[arr[i]-1]=arr[i];
                arr[i]=temp;
            }else{
                i++;
            }
        }
        for(let j=0;j<n;j++){
            if(arr[j]!=j+1) return j+1;
        }
        return n+1;
    }
}