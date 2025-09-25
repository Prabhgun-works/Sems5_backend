let box=document.querySelector("#box");
let btn=document.querySelector("#btn");
let colours=["red","blue","green","yellow","orange","purple"];  
id=null;
let stop=document.querySelector("#stop");
function generateRandomColor() {
    let index = Math.floor(Math.random() * colours.length);
    console.log(index);
    
    let randomColor = colours[index];
    console.log(randomColor);
    box.style.background = randomColor;
    
}
btn.addEventListener("click", function() {
    id = setInterval(() => {
        generateRandomColor();
    }, 500); 
});
stop.addEventListener("click", function() {
    if(id){
        clearInterval(id);
        id = null;
    }
});