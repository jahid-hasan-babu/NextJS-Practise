//add elements in array
var fruits = ["apple", "banana", "orange"];
var newUpdateFruits = fruits.push("mango");
// console.log(newUpdateFruits);
// console.log(fruits);
//remove elements in array
var lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits)
//Iterating over elements
for (var i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    // console.log(i)
}
// for...of
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    // console.log(fruit);
}
//foreach -->
// fruits.forEach((curVal:string) => console.log(curVal))
//doubling each number
var numbers20 = [10, 20, 15, 21, 30, 40];
// const doubleData:number[] = numbers20.map((curVal:number) => curVal * 2)
// console.log(doubleData);
var numberToString = numbers20.map(function (curElm) { return curElm.toString(); });
// console.log(numberToString)
// filter method
var filterData = numbers20.filter(function (curElm) { return curElm >= 30; });
console.log(filterData);
//filter even number
var evenNumber = numbers20.filter(function (curElm) { return curElm % 2 === 0; });
console.log(evenNumber);
var names21 = ["Alice", "Bob", "Anna", "Andrew"];
var fourAlphabetName = names21.filter(function (curName) { return curName.length > 4; });
console.log(fourAlphabetName);
var startNameWithA = names21.filter(function (curName) { return curName[0] === "A"; });
console.log(startNameWithA);
//homework
var sumNu = numbers20.reduce(function (acc, curValue) { return acc + curValue; }, 0);
var calculateAverageNumber = (sumNu / numbers20.length).toFixed(2);
console.log(calculateAverageNumber);
var maxVal = Math.max.apply(Math, numbers20);
console.log(maxVal);
