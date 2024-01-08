//buffer与字符串转换
let buf_4 = Buffer.from([105,32,108,111,118,101,32,121,111,117]);
// console.log(buf_4.toString()); // utf-8

// [] 
let buf = Buffer.from('hello');
// console.log(buf[0].toString(2));

// 溢出
let buf2 = Buffer.from('hello');
buf2[0] = 361; //舍弃高位的数字（转换为2进制后舍弃）  0001 0110 1001 => 0110 1001
// console.log(buf2.toString());

// 中文
let buf3 = Buffer.from('我是你爹');
console.log(buf3[0]);