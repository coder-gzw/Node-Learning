const { read } = require("fs");
const path =  require("path");
const fs   = require("fs").promises;

async function readMultiFilesSync(encoding="utf-8",...files){
    try{
        const filepaths = files.map(file=>{
            return path.resolve(__dirname,file);
        });
        const resdatas =await Promise.all(filepaths.map(filepath=>{
            return fs.readFile(filepath,{encoding});
        }));
        console.log(resdatas);

    }catch(error){
        console.log(`读取文件失败:${error.message}`);
    }
}
readMultiFilesSync(undefined,"a.txt","b.txt"); //用未定义的
readMultiFilesSync("utf-8","a.txt","b.txt");   //自己定义utf-8