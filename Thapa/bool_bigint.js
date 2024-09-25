var isMyName = true;
var hasStarted = false;
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(6));
function isDivisibleBy4And8(a) {
    return a % 4 === 0 && a % 8 === 0;
}
console.log(isDivisibleBy4And8(16));
// const maxNumber = Number.MAX_SAFE_INTEGER;
var bigNumber = 9007199254740992n;
var anotherBig = BigInt("90071992547409925");
console.log(bigNumber);
console.log(anotherBig);
