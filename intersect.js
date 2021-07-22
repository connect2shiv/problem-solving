var intersect = function(nums1, nums2) {
    const obj = {};
    for(let i of nums1) {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
    return nums2.filter((n) => {
        if(obj[n]) {
            obj[n] -= 1;
            return true;
        } else {
            return false;
        }
    });
};

console.log(intersect([1, 2, 2, 1, 4, 5, 9], [9, 2, 2, 9, 1]));