var greet3 = function (name, id) {
    return "Hello ".concat(name, " your id is ").concat(id);
};
var employee = greet3("Jahid", 5);
// default
// const greet4 = (name:string, id:number = 1):string =>{
//     return `Hello ${name} your id is ${id}`;
// }
// id is optional
var greet4 = function (name, id) {
    return "Hello ".concat(name, " your id is ").concat(id);
};
var employee1 = greet4("Jahid", 5);
console.log(employee);
