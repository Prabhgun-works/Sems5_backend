const fs = require('fs'); 

fs.writeFile("../demo.txt", "Hello", function(err, data){
    if(err) return console.log("Error in writing file 1");
    else console.log("File 1 is written successfully");
})

fs.writeFile("../Demo2.txt", "World", function(err, data){
    if(err) return console.log("Error in writing file 2");
    else console.log("File 2 is written successfully");
})