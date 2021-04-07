const bcrypt = require('bcrypt');

let pswrd = bcrypt.hashSync('12345', 9)
console.log(pswrd);

let pswrd2 = bcrypt.hashSync('55555', 9)
console.log(pswrd2)