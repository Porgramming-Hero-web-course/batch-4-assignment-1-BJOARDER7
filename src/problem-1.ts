{
    //

    // Problem-1
    
    const sumArray = (arr: number[]):number => {
        let sum: number = arr.reduce((sum: number, x: number) => sum + x);
        return sum;
    }

    sumArray([1,2,3,4,5]);

// console.log(sumArray([1,2,3,4,5]));

    //
}