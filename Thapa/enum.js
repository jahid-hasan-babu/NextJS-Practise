var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user31 = {
    email: "abc@gmail.com",
    password: "12354",
    role: Roles.admin
};
var user21 = {
    email: "abdc@gmail.com",
    password: "1d354",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "admin" ? "".concat(email, " is allow to edit website") : "".concat(email, " is not allow to edit website");
};
console.log(isAdmin(user31));
console.log(isAdmin(user21));
