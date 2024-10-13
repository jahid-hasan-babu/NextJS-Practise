var person1 = ["Jahid", 29, true];
var person2 = ["Hasan", 29, false];
// person1.push(145) you can not push if use readonly
// const person1: personInfo = [25, 29, true] --> did not except
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name ".concat(name, " Age: ").concat(age, " Driver license: ").concat(hasDriverLicense));
};
displayPersonInfo(person1);
displayPersonInfo(person2);
