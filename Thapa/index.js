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
var firstName = "Jahid";
var lastName = "hasan";
var fullNme = firstName + lastName;
console.log(fullNme);
var text = "jahid";
var textLength = text.length;
console.log(textLength);
var text1 = "Jahid hasan";
var uppercaseText = text.toUpperCase();
var lowercaseText = text.toLowerCase();
console.log(lowercaseText);
console.log(uppercaseText);
var longText = "Jahid hasan babu Thakurgaon polytechnic institute.Computer in Diploma Engineering";
var shortText = longText.slice(0, 10);
var shortTextUsingSubstring = longText.substring(0, 10);
console.log(shortText);
console.log(shortTextUsingSubstring);
var product = "Apple 16 pro max";
var price = 1200;
var productDetails = "The pruduct is ".concat(product, " is priced is $").concat(price);
console.log(productDetails);
