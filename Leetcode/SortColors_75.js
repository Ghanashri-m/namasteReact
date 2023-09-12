const sortColors = (colors) => {
    let left = 0;
    let right = colors.length - 1;
    let current = 0;

    while (current <= right) {
        if (colors[current] === 0) {
            [colors[left], colors[current]] = [colors[current], colors[left]];
            left++;
            current++;
        } else if (colors[current] === 2) {
            [colors[right], colors[current]] = [colors[current], colors[right]];
            right--;
        } else {
            current++;
        }
    }
    return colors;
}

console.log(sortColors([2,1,2,1,0,2,1]));

// Time complexity
// O(n);
// Space complexity 
// O(1)
