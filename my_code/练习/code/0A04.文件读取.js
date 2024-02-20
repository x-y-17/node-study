const fs = require('fs');
const readFunc = (err,data) => {
    if(err) throw err;
    console.log(data.toString());
}

fs.readFile('./观书有感.txt',readFunc)

let data = fs.readFileSync('../座右铭.txt');
console.log(data.toString())