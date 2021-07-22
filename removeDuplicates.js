// var removeDuplicates = function(nums) {
//     var mapObj = nums.reduce((acc, item) => {
//         acc[item] = acc[item] !== undefined ? acc[item] + 1 : 1;
//         return acc;
//     }, {});
//     console.log("result ===> ", Object.keys(mapObj).map((item) => parseInt(item)));
//     return Object.keys(mapObj).map((item) => parseInt(item));
// };

var removeDuplicates = function(nums) {
    var start = 0;
    for(var i = 1; i < nums.length; i++) {
        if (nums[start] !== nums[i]) {
            nums[++start] = nums[i];
        }
    }
    console.log("result ===> ", start + 1); 
    return start + 1;
};

removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 5, 5]);

// [1, 1, 2, 2, 2]
// 