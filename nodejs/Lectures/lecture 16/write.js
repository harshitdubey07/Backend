let fs=require('fs');
let path=__dirname+'/a.txt';
fs.writeFile(path,"learning fs module writeFile", ()=>{
    if(err)
        console.log(err);
    else 
        console.log("write successfully....")
})