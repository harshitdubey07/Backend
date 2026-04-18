let fs=require('fs/promise');
let path=__dirname+'/a.txt';

fs.readFile(path)
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err)
})