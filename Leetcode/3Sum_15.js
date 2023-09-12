const ThreeSum = (nums) => {
    // Step 0: Handle base case
    if (nums.length < 3) return nums;

    // Step 1: Sort
    nums.sort((a, b) => a - b);

    let output = [];

    // Loop through, use 2 pointer approach, to find the complementing elements
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break; // because array is sorted. all the values after nums[i] are greater than 0;
        if (i > 0 && nums[i] === nums[i-1]) continue; // check for duplicates

        let start = i+1;
        let end = nums.length - 1;

        while (start < end) { // start and end cannot be equal (since they are jth and kth indexes)
            const sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                output.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while(start < end && nums[start] === nums[start - 1]) start++; // skip duplicates
                while(start < end && nums[end] === nums[end + 1]) end--; // skip duplicates
            } else if (sum > 0) {
                end--;
            } else {
                start++;
            }
        }
    }
    console.log(...output);
}

ThreeSum([-1,0,1,2,-1,-4]);
ThreeSum([0,1,1]);
ThreeSum([0,0,0]);

// Time complexity O(n^2)

// sorting - O(nlogn)

// Loop with 2-pointer approach: 
// After sorting, the code uses a loop with a 2-pointer approach to find triplets that sum to zero. 
// The loop runs for each element in the array (n iterations), and for each iteration, it uses 
// two pointers (start and end) that move towards each other. 
// In the worst case, each iteration of this loop can take O(n) time because both start and end can traverse the entire array.

// Inside the loop, there are checks for duplicates and operations that run in constant time 
// (e.g., checking if the current element is greater than zero, checking for duplicate elements, 
// incrementing/decrementing pointers). These operations do not significantly affect the overall time complexity.

// O(n log n) (sorting) + O(n) (2-pointer loop) = O(n log n).

// Space Complexity O(n)
// O(n) if we consider the output array