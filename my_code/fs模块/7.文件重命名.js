const fs = require("fs");

// rename方法 重命名
fs.rename("./论语.txt", "./论语.txt", (err) => {
	if (err) {
		console.log("操作失败", err);
        return;
	}
	console.log("操作成功");
});

// 还可以用来移动
fs.rename("./观书有感.txt", "./资料/观书有感2.txt", (err) => {
	if (err) {
		console.log("操作失败", err);
        return;
	}
	console.log("操作成功");
});
