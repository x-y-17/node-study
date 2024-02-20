const fs = require("fs");

fs.stat("./资料/笑看风云2.mp4", (err, data) => {
	if (err) {
		console.log("操作失败");
		return;
	}
	// console.log(data);
    // isFile 是不是文件
    console.log(data.isFile());
    // isDirectory 是不是文件夹
    console.log(data.isDirectory());
});
