const fs = require('fs');
const process = require('process');
// 方法1：readFile
// // 读取内容
// let data = fs.readFileSync('./资料/笑看风云.mp4');
// // 写入文件
// fs.writeFileSync('./资料/笑看风云2.mp4',data);
// console.log(process.memoryUsage());  // rss: 102109184字节

// 方法2： 流式操作
const rs = fs.createReadStream('./资料/笑看风云.mp4');
const ws = fs.createWriteStream('./资料/笑看风云3.mp4');

// 通过管道也可以复制
rs.pipe(ws)

// rs.on('data',chunk => {
//     ws.write(chunk);
// })
console.log(process.memoryUsage()); // rss: 21012480字节
