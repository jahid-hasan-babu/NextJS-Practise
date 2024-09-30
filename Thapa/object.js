//type aliase
// const person:{
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address:{city: string; country: string}
// } = {
//     name: "Jahid",
//     age: 20,
//     isStudent: true,
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh"
//     }
// }
var person1 = {
    name: "Jahid",
    age: 20,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
var person2 = {
    name: "Jahid",
    age: 20,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
console.log(person1.address.country);
//update object properties
person1.address.city = "Savar";
console.log(person1.address.city);
var product1 = {
    name: "laptop",
    price: 3000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1));
