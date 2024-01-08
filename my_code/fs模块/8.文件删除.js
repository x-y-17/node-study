const fs = require("fs");


// unlink方法  unlinkSync同步删除
fs.unlink("./论语.txt", (err) => {
	if (err) {
		console.log("操作失败", err);
		return;
	}
	console.log("操作成功");
});


// // rm方法需要node 14.4版本及以上 rmSync同步删除
fs.rm("./观书有感.txt", (err) => {
	if (err) {
		console.log("操作失败", err);
		return;
	}
	console.log("操作成功");
});

const data = fs.unlinkSync("./观书有感2.txt");
console.log(data)