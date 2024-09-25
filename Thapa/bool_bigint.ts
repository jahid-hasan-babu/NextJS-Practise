let isMyName:boolean = true;
let hasStarted: boolean = false;

function isEven(a:number):boolean{
    return a % 2 === 0;

}


console.log(isEven(6));

function isDivisibleBy4And8(a: number): boolean {
    return a % 4 === 0 && a % 8 === 0;
}

console.log(isDivisibleBy4And8(16))

// const maxNumber = Number.MAX_SAFE_INTEGER;
let bigNumber:bigint = 9007199254740992n;
let anotherBig = BigInt("90071992547409925")
console.log(bigNumber)
console.log(anotherBig)
