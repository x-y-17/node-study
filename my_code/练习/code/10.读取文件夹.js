const fs = require("fs");

callback = (err,data) => {
	if (err) {
		console.log("操作失败:", err);
		return;
	}
	console.log("操作成功:",data);
};

// 成功回调的数据是文件夹下的内容列表
fs.readdir('./资料',callback);
