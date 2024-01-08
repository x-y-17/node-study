const fs = require("fs");

// 创建流式对象
const rs = fs.createReadStream("./资料/笑看风云.mp4");

// 绑定data事件
rs.on("data", (chunk) => {
	console.log(chunk.length);
});

rs.on("end", () => {
	console.log("读取完成");
});
