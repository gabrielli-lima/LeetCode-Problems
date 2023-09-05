var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let targetDifference = target - nums[i];

        for (let x = i + 1; x < nums.length; x++) {
            if (targetDifference  === nums[x]) {
                arr.push(i, x)
                // console.log(arr)
                return arr
            }
        }
    }
    return arr
}

// twoSum([2, 7, 11, 15], 9); // [0,1]
// twoSum([3, 2, 4], 6); // [1,2]
// twoSum([3, 3], 6); // [0,1]