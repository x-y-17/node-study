const fs = require("fs");

errHandler = (err) => {
	if (err) {
		console.log("操作失败:", err);
		return;
	}
	console.log("操作成功");
};

// mkdir方法创建文件夹 mk -> make dir -> directory文件夹
fs.mkdir("./html", errHandler);

// 递归创建
fs.mkdir("./a/b/c",{recursive: true}, errHandler);

