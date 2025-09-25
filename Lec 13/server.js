const express = require("express"); 
const app = express(); 
const fs = require('fs'); 
app.use(express.static(__dirname+"/public")); 


app.get("/todos", (req, res)=> {
    fs.read(__dirname+'/todo.json', 'utf-8', (err,data) => {
        if(err) {
            console.log(err); 
        }   else {
            console.log('File Content', data);  
        }
    })
})

app.listen(5555, () => {
    console.log("server started")
})