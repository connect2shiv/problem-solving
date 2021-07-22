var rotate = function(nums, k) {
    const reverse = (i, j) => {
        let temp;
        while(i < j) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    
    let len = nums.length;
    let effK = k % len;
    if (len !== 1) {
        reverse(0, len - effK - 1);
        reverse(len - effK, len - 1);
        reverse(0, len - 1);
    }
    console.log("result ===> ", nums);
};

rotate([1, 2,  3, 4, 5, 6], 2);
rotate([1, 2,  3, 4, 5], 7);
rotate([1], 3);