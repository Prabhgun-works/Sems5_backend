const fs = require('fs');
let users = [
    {
        id : 1 , 
        Name : "Prabhgun" , 
        age : 20, 
    }, 
    {
        id : 2 ,
        Name : "Vani", 
        age : 20, 
    }, 
]

// Write the users array to a file
fs.writeFile("./users2.txt", JSON.stringify(users), function(err){
    if(err){
        console.log("Write error:", err);
    }else{
        console.log("File written successfully.");
    }
});
