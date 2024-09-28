//add elements in array

const fruits: string[] = ["apple", "banana", "orange"];
const newUpdateFruits = fruits.push("mango");
// console.log(newUpdateFruits);
// console.log(fruits);

//remove elements in array
const lastData = fruits.pop()
// console.log(lastData);
// console.log(fruits)


//Iterating over elements
for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
    // console.log(i)
}
// for...of
for (const fruit of fruits){
    // console.log(fruit);
}
//foreach -->
// fruits.forEach((curVal:string) => console.log(curVal))

//doubling each number
let numbers20 = [10, 20, 15, 21, 30,40];
// const doubleData:number[] = numbers20.map((curVal:number) => curVal * 2)
// console.log(doubleData);

const numberToString:string[] = numbers20.map((curElm:number)=> curElm.toString())
// console.log(numberToString)

// filter method
const filterData = numbers20.filter((curElm:number)=> curElm >= 30)
console.log(filterData);

//filter even number
const evenNumber = numbers20.filter((curElm:number)=> curElm % 2 === 0)
console.log(evenNumber);

const names21: string[] = ["Alice", "Bob", "Anna", "Andrew"];

const fourAlphabetName:string[] = names21.filter((curName:string) => curName.length > 4 )
console.log(fourAlphabetName);

const startNameWithA:string[] = names21.filter((curName:string) => curName[0] === "A")
console.log(startNameWithA);

//homework
const sumNu = numbers20.reduce((acc: number, curValue: number) => acc + curValue, 0);
const calculateAverageNumber = (sumNu / numbers20.length).toFixed(2);

console.log(calculateAverageNumber);

const maxVal:number = Math.max(...numbers20)
console.log(maxVal)
