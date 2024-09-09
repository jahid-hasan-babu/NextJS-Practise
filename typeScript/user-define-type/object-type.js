// let user1: object;
// users = [{name: "Jahid"}, {name: "Hasan"}]
var users;
users = [];
// let user1: { userName: string; userId?: number }; optional
var user1;
user1 = { userName: "Jahid", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Hasan", userId: 102 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
