
  const express = require("express");
    const app = express();
    const PORT = 3030;

    app.use(express.static(__dirname+"/public")); 
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(express.static(__dirname+"/public"))
    app.post("/user", (req, res) => {
        let email =req.body.email 
        let password  =  req.body.password;
        console.log(email , password); 
        
        try({
            res.json({
                success : true , 
                message : "Success!"  , 
                data :  {
                    email , 
                    password ,
                }
            })
        })
      
        catch(error) {
            res.json({
                success : false , 

            })
        } 
        
    })
    
    app.listen(PORT, () => 
        console.log(`Server is running on ${PORT}`)
    );