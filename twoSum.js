var twoSum = function(nums, target) {
    const obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            return [obj[nums[i]], i];
        } else {
            const diff = target - nums[i];
            obj[diff] = i;
        }
    }
    return [];
};

twoSum([2, 7, 11, 15], 9);