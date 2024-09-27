
const greet3 = (name:string, id:number):string =>{
    return `Hello ${name} your id is ${id}`;
}

const employee = greet3("Jahid", 5);
 // default
// const greet4 = (name:string, id:number = 1):string =>{
//     return `Hello ${name} your id is ${id}`;
// }
// id is optional
const greet4 = (name:string, id?:number):string =>{
    return `Hello ${name} your id is ${id}`;
}

const employee1 = greet4("Jahid", 5);
console.log(employee)

