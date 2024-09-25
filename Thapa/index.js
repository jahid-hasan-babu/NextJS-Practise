"use strict";
// console.log("My name is jahid");
// let num:number = 5;
//
//
// console.log(num)
//function define
//@ts-ignore
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 12));
let firstName = "Jahid";
let lastName = "hasan";
let fullNme = firstName + lastName;
console.log(fullNme);
let text = "jahid";
let textLength = text.length;
console.log(textLength);
let text1 = "Jahid hasan";
let uppercaseText = text.toUpperCase();
let lowercaseText = text.toLowerCase();
console.log(lowercaseText);
console.log(uppercaseText);
let longText = "Jahid hasan babu Thakurgaon polytechnic institute.Computer in Diploma Engineering";
let shortText = longText.slice(0, 10);
let shortTextUsingSubstring = longText.substring(0, 10);
console.log(shortText);
console.log(shortTextUsingSubstring);
let product = "Apple 16 pro max";
let price = 1200;
let productDetails = `The pruduct is ${product} is priced is $${price}`;
console.log(productDetails);
