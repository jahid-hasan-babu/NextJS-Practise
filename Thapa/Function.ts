const greet = (name:string, id:number):string => {
    return(`Welcome ${name} and your id is ${id}`);
}

const myGreet = greet("Jahid", 1);
console.log(myGreet)

const isPalindrome = (palin:string):boolean => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
}

console.log((isPalindrome("12321")));



function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    return average;
}

// Example usage
const result = calculateAverage([10, 20, 30, 40]);
console.log(result);

const findMaxValue = (numbers: number[]):number =>{
    const maxNumber = Math.max(...numbers);
    return maxNumber;
}

const rslt = findMaxValue([10, 20, 30, 40]);
console.log(rslt);
