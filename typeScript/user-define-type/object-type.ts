// let user1: object;
// users = [{name: "Jahid"}, {name: "Hasan"}]

let users: object[];
users = [];

// let user1: { userName: string; userId?: number }; optional
let user1: { userName: string; userId: number };

user1 = { userName: "Jahid", userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: "Hasan", userId: 102 };
users.push(user2);

for (const key in users) {
  console.log(users[key]["userName"]);
}
