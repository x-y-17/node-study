const fs = require("fs");
const callBackFunc = (err) => {
	// err写入失败：返回错误对象 写入成功则是null
	if (err) {
		console.log("写入失败");
		return;
	}
	console.log("写入成功");
};
fs.appendFile(
	"座右铭.txt",
	"\r\n择其善者而从之，择其不善者而改之",
	callBackFunc
);

fs.appendFileSync("座右铭.txt", "\r\n温故而知新，可以为师矣");

// 使用writeFile也可以追加写入
fs.writeFile("座右铭.txt", "\r\nI love you", { flag: "a" }, callBackFunc);
