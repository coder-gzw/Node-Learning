const fs =require("fs");
const path = require("path");
fs.open(path.resolve(__dirname,"a.txt"),(err,fd)=>{
    if(err){
     console.error(`打开文件错误:${err.message}`);
     return;
    }
    console.log(fd);

    fs.fstat(fd,(err,stat)=>{
        if(err){
            console.error(`错误:${err.message}`);
            return;
        }
        console.log(stat);
        fs.close(fd);
    });

});