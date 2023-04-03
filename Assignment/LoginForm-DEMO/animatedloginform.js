function login(){
const userName = document.getElementById("login-user").value;
const password = document.getElementById("login-password").value;
// let userName = prompt("Enter userName");
// let password = prompt("Enter password");
if(userName == "Amaratuchukwu" & password == "amieatuchukwu"){
    alert("Login");
    location.href = '../OnlineShop-DEMO/business.html'
} else if(userName == "" & password == ""){
    alert("No username entered");
} else if(userName != "Amaratuchukwu"){
    alert("Wrong userName");
} else{
    alert("Wrong password");
}
}
const showHide = document.getElementById("show-hide");
let passwordInput = document.getElementById("login-password");
showHide.addEventListener('click', function () {
    showHide.classList.toggle('show');
    if(showHide.classList.contains('show')){
        showHide.classList.remove('fa-eye-slash');
        showHide.classList.add('fa-eye');
        passwordInput.setAttribute('type', 'text');
    }
    else{
        showHide.classList.add('fa-eye-slash');
        showHide.classList.remove('fa-eye');
        passwordInput.setAttribute('type', 'password');
    }
});


























