const fs = require('fs');

fs.writeFile('./座右铭.txt','三人行，必有我师焉',err => {
    // err写入失败：返回错误对象 写入成功则是null
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})
console.log('writeFileSync')
fs.writeFileSync('./data.txt','test');