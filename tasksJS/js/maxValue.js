function maxValue(nums) {
    // Преобразуем двумерный массив в одномерный
    const flatNums = nums.flat();

    if (flatNums.length === 0) return 0;

    let maxProd = flatNums[0];
    let minProd = flatNums[0];
    let result = flatNums[0];

    for (let i = 1; i < flatNums.length; i++) {
        const current = flatNums[i];

        if (current < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(current, maxProd * current);
        minProd = Math.min(current, minProd * current);

        result = Math.max(result, maxProd);
    }

    return result;
}



const nums1 = [[2, 3], [-2, 4]];
console.log(maxProduct(nums1)); // 6