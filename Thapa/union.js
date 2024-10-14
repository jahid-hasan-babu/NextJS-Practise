var inputValue = function (value) {
};
//union
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error('Invalid input data');
};
console.log(userInput(10));
console.log(userInput("subscribe"));
var employee = {
    name: "Jahid",
    age: 20,
    emp_id: 1545,
    department: "Frontend Developer"
};
