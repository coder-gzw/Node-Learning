const fs = require("fs");       //fs是文件系统的简称file system
const path = require("path");   //获取当前文件所在的绝对路径用

//文件的同步读取
const res = fs.readFileSync(path.resolve(__dirname,"a.txt"),{
    encoding:"utf-8"
});
console.log(res);   //浏览器会阻塞等待，直到有结果

//异步读取,采用回调的方式
fs.readFile(path.resolve(__dirname,"a.txt"),{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.error("读取文件失败!");
        return;
    }
    console.log(data);
});

//上面那种方式可能会产生回调地狱
//于是后面fs也引入了promise
fs.promises.readFile(path.resolve(__dirname,"a.txt"),{
    encoding:"utf-8"}
).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});



