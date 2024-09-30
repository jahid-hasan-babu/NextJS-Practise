//type aliase

type Person = {
    name: string;
    age?: number; //optional  properties
    isStudent: boolean;
    address:{city: string; country: string}
}



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

const person1:Person = {
    name: "Jahid",
    age: 20,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const person2:Person = {
    name: "Jahid",
    age: 20,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

console.log(person1.address.country);

//update object properties
person1.address.city = "Savar";
console.log(person1.address.city);

type Product = {
    name: string;
    price: number;
    quantity: number
}
const product1:Product = {
    name: "laptop",
    price: 3000,
    quantity: 5
}

const calculateTotalPrice = (product: Product) => {
    return product.price * product.quantity;
}

console.log(calculateTotalPrice(product1))