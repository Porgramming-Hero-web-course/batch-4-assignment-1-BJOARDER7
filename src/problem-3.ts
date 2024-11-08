{
    //
    // Problem-3

const countWordOccurrences = (sentence: string, word: string): number => {

    const wordArr: string[] = sentence.split(" ");    
    let count: number = 0;
    for (let i = 0; i<wordArr.length; i++) {
        if(word.toLowerCase() === wordArr[i].toLowerCase()){
            count++;
        }        
    }
    return count;
}

countWordOccurrences("I love typescript", "typescript");

// console.log(countWordOccurrences("I love typescript", "typescript"));

    //
}