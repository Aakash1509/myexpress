const express = require('express')
const app = express()
const port = 3000

//Middleware to load static data like image and css
app.use(express.static(__dirname+'/public'));

//Custom middleware
app.use(function(req,res,next){
  console.log("Middleware called URL is "+ req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/myform/',(req,res) => {
  res.sendFile(__dirname+'/form.html');
})
app.get('/process',(req,res) => {
  var a = parseInt(req.query.txt1);
  var b = parseInt(req.query.txt2);
  var c = parseInt(req.query.txt3);
  var d = parseInt(req.query.txt4);
  var avg = (a+b+c+d)/4;
  if(avg>50){
  var ans = `Marks of sub1 is ${a}<br/>Marks of sub2 is ${b}<br/>Marks of sub3 is ${c}<br/>Marks of sub4 is ${d}<br/>Percentage is ${avg}<br/>
  You are passed`;
  
  }
  else{
    var ans = `Marks of sub1 is ${a}<br/>Marks of sub2 is ${b}<br/>Marks of sub3 is ${c}<br/>Marks of sub4 is ${d}<br/>Percentage is ${avg}<br/>
    You are failed`;
  }
  res.send(ans);
})