const fs = require("fs").promises   //直接引入模块的promises api
const path = require("path");


async function readFileSync(file,encoding="utf-8"){
    try{
        const filepath = path.resolve(__dirname,file);
        const res = await fs.readFile(filepath,{encoding});
        console.log(res);
    }catch(error){
        console.error(`读取文件失败:${error.message}`);
    }
}

readFileSync("a.txt");

