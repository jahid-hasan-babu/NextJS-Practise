//built in type: number, string, boolean, void, null
//let id; -->any
var userId;
var firstName;
var lastName;
var isActivated;
var fullName;
userId = 101;
firstName = "Jahid";
lastName = " Hasan";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ", username: ").concat(fullName, ",account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
// console.log(userId.toUpperCase())
function display() {
    console.log("Hi i am display");
}
display();
