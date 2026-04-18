let fs=require('fs');
//let path="C:\Users\DELL\OneDrive\Desktop\node-test\lecture 5"
let path=__dirname+'/data.txt';

fs.writeFile(path,"learning node js file system writeFile",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("Done");
})
//console.log(__dirname);