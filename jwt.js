const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

const value = {
    name : "netra",
    password : "1234"
}

const token = jwt.sign(value, jwtPassword);

const decoded = jwt.decode(token)

console.log(decoded);