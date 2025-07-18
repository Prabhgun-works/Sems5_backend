const express = require('express'); // equire express. 
const app = express(); 

app.get('/', (req,res) => {
    res.send("Hello World"); 
    console.log(req); 

    res.json({
        name : "Prabhgun", 
        Age : 20 , 
        Address : "Bihar",
        isLogin : true, 

    })
} )

// using Params 
app.get('/users/:id', (req, res) =>  {
    console.log(req.params.id); 
    let id = req.params.id; 
    res.send(id); 
})

app.listen(2222 ,() => {
    console.log('server is running on port 2222'); 
})

//using QUERY 
app.get("/blogs", (req, res) => {
    console.log(req.query.title); // space ke saath req jayegi but data space ke saaath ayega 
    res.send("got it"); 
})

// USING PARAMS  .
// USING QUERY PARAMETERS . 
// HW : practice CRUD api's Post , delete , put , update. 