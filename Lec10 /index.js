const express = require('express');
const app = express();
const port = 5050;
app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname+"/public"))


// app.use(express.static("/Users/godsent/Desktop/Sem5/Backend/Lec10 /public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html"); // or adjust path as needed
});
app.post("/addUser", (req, res)=> {
  console.log(req.body); []
  let username= req.body.username; 
  let password = req.body.password; 
  res.json({
    username:username, 
    password : password
  })
})
app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});