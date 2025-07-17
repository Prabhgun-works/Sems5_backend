
import {read} from './io.js'; 
async function main(){
    let users1 = await read("./users.txt"); 
    let users2 = await read("./users2.txt"); 
    let users3 = users1.concat(users2); 
    console.log(users3); 
}

main(); 