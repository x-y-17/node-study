const fs = require('fs');

const files = fs.readdirSync('./code');

files.forEach(item => {
    let data = item.split('.');
    let num = data[0]
    if(Number(num) < 10){
        num = '0' + num;
        data[0] = num;
    }
    const str = data.join('.','.');
    console.log(str)
    fs.renameSync(`./code/${item}`, `./code/${str}`)
    
})
// console.log(files);