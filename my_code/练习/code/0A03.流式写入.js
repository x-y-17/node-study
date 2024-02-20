// 观书有感

const fs = require('fs');

// 1.创建写入流对象
const ws = fs.createWriteStream('./观书有感2.txt');

// 2.write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');

// 3.关闭通道  （可选，不写也会自动回收）
ws.end();
