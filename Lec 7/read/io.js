const fs = require("fs"); 
function read(file){
    return new Promise( (resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) reject(err);
            let users = JSON.parse(data); 
            resolve(users); 
        })
    })
}
module.exports.read = read; 

// Dry concept : Don't repeat yourself . 