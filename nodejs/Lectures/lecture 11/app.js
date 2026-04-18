//query params

let express =require('express');
let bodyparser = require('body-parser');
let app=express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
let obj ={
   id:1212
}
// let todo = [
// "coding",
// "reading books",
// "go to market"
// ]

// app.get('/register',(req,res)=>{
//    res.render('index1',{todo});   
// })
// app.get('/register',(req,res)=>{
//    res.render('register');   
// })

app.post('/register',(req,res)=>{
   console.log(req.body);
   res.render("user registered successfully...");
})

// app.get('/',(req,res)=>{
//    res.render('index',{obj});
// })

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,'views'));

app.get('/product/:id',(req,res)=>{
console.log(req.params);
res.send(" this is a product route");

})

// /todo/:id
app.get('/todo/:id',(req,res)=>{
   console.log(req.params.id);
   res.send("this is a todo route");
})
app.listen(3000,()=>{
   console.log("app is running at port 3000")
 
})