var student1 = {
    name: "Jahid",
    age: 29,
    greet: function (country) {
        return "My name is ".concat(this.name, " and age is ").concat(this.age, ". I'm from ").concat(country);
    }
};
var introduction = function (student) {
    var name = student.name, age = student.age;
    return "My name is ".concat(name, " and age is ").concat(age);
};
console.log(introduction(student1)); // Logging the introduction
console.log(student1.greet("Bangladesh")); // Logging the greeting with country
