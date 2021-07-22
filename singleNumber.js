var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    const mapNums = {};
    for(let i of nums) {
        if(mapNums[i]) {
            delete mapNums[i];
        } else {
            mapNums[i] = 1;
        }
    }
    console.log(mapNums);
    return Object.keys(mapNums)[0];
};

singleNumber([4,1,2,1,2]);