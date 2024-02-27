let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

let nums = mix.filter((num) => !isNaN(num));
nums = nums.slice(++start, nums.length);
nums.forEach((num) => console.log(num));
