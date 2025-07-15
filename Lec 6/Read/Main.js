const fs = require('fs');

fs.readFile('../demo.txt', 'utf8', function(err, data1){
    if(err) return console.log(err);
    fs.readFile('../Demo2.txt', 'utf8', function(err, data2){
        if(err) return console.log(err);
        let result = data1.trim() + " " + data2.trim();
        fs.writeFile('../Demo3.txt', result, function(err){
            if(err) return console.log(err);
            else console.log("File 3 is written successfully");
        });
    });
});

