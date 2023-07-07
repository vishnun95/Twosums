// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var twoSum = function(nums, target) {
    
    let map = new Map()
    for (let i=0; i<=nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)]
        }
        map.set(nums[i], i);
    }
    return [];
};

