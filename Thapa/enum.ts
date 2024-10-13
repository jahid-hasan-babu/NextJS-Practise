enum Roles {
    user = "user",
    admin = "admin"
}

type loginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
}

const user31:loginDetails = {
    email: "abc@gmail.com",
    password: "12354",
    role: Roles.admin
}

const user21:loginDetails = {
    email: "abdc@gmail.com",
    password: "1d354",
    role: Roles.user
}

const isAdmin: (user: loginDetails) => string = (user: loginDetails) : string => {
    const {name,email, role} = user
    return role === "admin" ? `${email} is allow to edit website` : `${email} is not allow to edit website`
}
console.log(isAdmin(user31))
console.log(isAdmin(user21))

