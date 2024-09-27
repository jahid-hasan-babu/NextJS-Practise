var greet = function (name, id) {
    return ("Welcome ".concat(name, " and your id is ").concat(id));
};
var myGreet = greet("Jahid", 1);
console.log(myGreet);
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log((isPalindrome("12321")));
function calculateAverage(numbers) {
    if (numbers.length === 0)
        return 0;
    var total = numbers.reduce(function (sum, num) { return sum + num; }, 0);
    var average = total / numbers.length;
    return average;
}
// Example usage
var result = calculateAverage([10, 20, 30, 40]);
console.log(result);
var findMaxValue = function (numbers) {
    var maxNumber = Math.max.apply(Math, numbers);
    return maxNumber;
};
var rslt = findMaxValue([10, 20, 30, 40]);
console.log(rslt);
