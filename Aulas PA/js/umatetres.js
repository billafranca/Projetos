var nums = [];
    for(let i = 1; i <4; i++){
        var n1 = parseFloat(prompt("digite um número"+i));
        nums[i] = n1
    }


    if (nums[1] <= nums[2] && um <= nums[3]) {
    if (nums[3] <= nums[2]) {
        console.log(nums[1],">", nums[3], ">",nums[2]);
    } else {
        console.log(nums[1],">", nums[2], nums[3]);
    }
}   else if (nums[2] <= nums[3] && nums[2] <= nums[1]) {
    if (nums[1] >= nums[3]) {
        console.log(nums[2],">", nums[3],">", nums[1]);
    } else {
        console.log(nums[2],">", nums[1],">", nums[3]);
    }
}
    else if (nums[3] <= nums[1] && nums[3] <= nums[2]) {
    if (nums[1] >= nums[2]) {
        console.log(nums[3],">", nums[2],">", nums[1]);
    } else {
        console.log(nums[3],">", nums[1],">", nums[2]);
    }
}
