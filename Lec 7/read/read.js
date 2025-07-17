
// const fs = require("fs");
// import {read} from './io.js';  

// let data = fs.readFile("./users.txt", 'utf8', function(err,data){
//     if(err) return   console.log(err);

//     let users1 = JSON.parse(data);
//     console.log(users1);

//     const data2 = fs.readFile("./users2.txt", 'utf8' ,function(err, data2){

//     if(err) return console.log(err); 
//         let users2 = JSON.parse(data2);

//         console.log(users2);
    
//         let users3= users1.concat(users2); 
//         console.log(users3);

//         fs.writeFile('./users3.txt' ,JSON.stringify(users3), function(err){
//             if (err) return console.log("Err"); 
//             console.log("File Created will all users ."); 
//         })

        
//     })
    
// })

// console.log(data); // this is callback hell . Add promise to avoid this . 
import {read} from './io.js'; 
async function main(){
    let users1 = await read("./users.txt"); 
    let users2 = await read("./users2.txt"); 
    let users3 = users1.concat(users2); 
    console.log(users3); 
}

main(); 