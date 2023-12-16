const fs=require('fs').promises;
const { error } = require('console');
const path=require('path')

const filePromises=async ()=>{
    try{
        const wt= await fs.writeFile(path.join(__dirname,"/file.txt"),'thi is the new    file')

        const rd= await  fs.readFile('file.txt','utf-8')
        let result=rd.replace(/\s+/g," ")
        console.log(result);
    } catch(err){
        console.log(error);
    }
        
}

filePromises()

