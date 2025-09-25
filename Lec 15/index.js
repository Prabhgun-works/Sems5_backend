
    app.post("/addUsers", (req, res) => {
        const { email, password } = req.body;

        const storedEmail = email;
        const storedPassword = password;
        let newUser = {
            email, 
            password, 
        }
        
        console.log("Email:", storedEmail);
        console.log("Password:", storedPassword);

        console.log({
            data : newUser , 
            success : true ,  
            message : "User Added !"

        })
        res.send("Data received and stored!");
    });

    // Start server
    app.listen(PORT, () => 
        console.log(`Server is running on ${PORT}`)
    );