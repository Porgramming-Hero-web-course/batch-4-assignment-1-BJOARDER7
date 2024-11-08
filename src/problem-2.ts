{
    //
    // Problem-2

const removeDuplicates = (arr: number[]): number[] => {
    const newArr: number[] = [...new Set(arr)];
    return newArr;
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

    //
}