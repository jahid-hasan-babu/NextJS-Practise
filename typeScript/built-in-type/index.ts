//built in type: number, string, boolean, void, null
//let id; -->any
let userId: number;
let firstName: string;
let lastName: string;
let isActivated: boolean;
let fullName: string;

userId = 101;
firstName = "Jahid";
lastName = " Hasan";
isActivated = true;
fullName = firstName.concat(lastName);
console.log(
  `Your id: ${userId}, username: ${fullName},account activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
// console.log(userId.toUpperCase())

function display(): void {
  console.log("Hi i am display");
}
display();
