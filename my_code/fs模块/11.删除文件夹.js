const fs = require("fs");

let path = './a';

errHandler = (err) => {
	if (err) {
		console.log("操作失败:");
        // 此处可以不用手动递归了.. 用{recursive: true}配置项即可
        // fs.readdir(path,(err,data)=> {
        //     data.forEach(item => {
        //         console.log(`${path}/${item}`);
        //         fs.rm(`${path}/${item}`,err2 => {
        //             if(err2){
        //                 console.log("删除文件失败:",err2);
        //                 return;
        //             }
        //             console.log('删除文件成功');
        //         });
        //     })
        // })
		return;
	}
	console.log("操作成功");
};

// 不推荐使用
fs.rmdir(path,{recursive: true},errHandler);

// 推荐使用
fs.rm(path,{recursive: true},errHandler);