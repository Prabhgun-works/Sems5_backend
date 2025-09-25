
let signupForm = document.querySelector("#SignUp");  
let signupUsername = document.querySelector("#Signup-name"); 
let signupEmail = document.querySelector("#Signup-email"); 
let signupPassword = document.querySelector("#Signup-password"); 

signupForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    // get input values
    let username = signupUsername.value.trim();
    let email = signupEmail.value.trim();
    let password = signupPassword.value.trim();
        // if frontend in same server, full url not require , just endpoint 
    // send data to backend (adjust API URL)
    let response = await fetch("/api/users", { 
        method: "POST",
       
        body: JSON.stringify({
             email : email , 
             username : username ,
             password :  password , 
        }),

        headers: {
            "Content-Type": "application/json"
        },
    })
    let data =  await response.json(); 
    console.log(data) ;
    if(data.sucess) {
        alert("sucess!"); 
    } else {
        alert("Something went wrong!"); 
    }
}); 
// Login Feature
let loginForm = document.querySelector("#Login");
let loginUserName = document.querySelector("#loginUsername"); 
let loginPassword = document.querySelector("#loginPassword"); 

loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    // get values
    let username = loginUserName.value.trim();
    let password = loginPassword.value.trim();

    // send request to backend
    let response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,   // must match backend expectation
            password: password
        })
    });

    let data = await response.json();
    console.log(data);

    if (data.success) {
        alert("Login successful!");
        // store JWT for future requests
        localStorage.setItem("token", data.token);
    } else {
        alert("Login failed: " + data.message);
    }
});

// HW  : Add Blog 