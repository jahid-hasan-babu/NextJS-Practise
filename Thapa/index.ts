// console.log("My name is jahid");
// let num:number = 5;
//
//
// console.log(num)


//function define
//@ts-ignore
function sum(a:number, b:number):number{
    return a + b;
}

console.log(sum(5,12))

let firstName: string = "Jahid";
let lastName: string = "hasan";

let fullNme: string = firstName + lastName;
console.log(fullNme);

let text: string = "jahid";
let textLength: number = text.length;
console.log(textLength);

let text1: string = "Jahid hasan";

let uppercaseText: string = text.toUpperCase();
let lowercaseText: string = text.toLowerCase();

console.log(lowercaseText);
console.log(uppercaseText);

let longText: string = "Jahid hasan babu Thakurgaon polytechnic institute.Computer in Diploma Engineering";
let shortText : string = longText.slice(0,10);
let shortTextUsingSubstring: string = longText.substring(0, 10);
console.log(shortText);
console.log(shortTextUsingSubstring)

let product: string = "Apple 16 pro max";
let price : number = 1200;
let productDetails:string = `The pruduct is ${product} is priced is $${price}`
console.log(productDetails)



















