const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");

user = ["user","password"];

function login(){
    var email = email.Value;
    var password = password.Value;
    if(email==user[0] && password == user[1])
    {
        alert("Login Successful");
    }
    else{
        alert("Invalid Credentials");
    }
}