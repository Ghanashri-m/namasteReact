const containerWithMostWater = (height) => {
    let left = 0
    let right = height.length - 1;
    let area = 0;

    while (left <= right) {
        length = Math.min(height[left], height[right]);
        breadth = right - left;
        area = Math.max(area, length*breadth);

        if (height[left] >= height[right]) {
            right--;
        } else {
            left++;
        }
    }
    console.log(area);
}

containerWithMostWater([1,8,6,2,5,4,8,3,7]);

// Time Complexity O(n)
// Space Complexity O(1);