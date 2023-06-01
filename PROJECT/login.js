email = document.querySelector("#email");
password = document.querySelector("#pass");
confirmPassword = document.querySelector("#cpass");
btn = document.querySelector("#next");
logIn = document.querySelector("#log-in");
socialMedia = document.querySelector("#social-media");
previous = document.querySelector("#previous");
err = document.querySelector("#err");
twitter = document.querySelector("#twitter");
facebook = document.querySelector("#facebook");
googlePlus = document.querySelector("#gplus");
personInfo = document.querySelector("#person-info");
secondButton = document.querySelector("#s-next");
secondPrevious = document.querySelector("#s-previous");
firstName = document.querySelector("#fname");
lastName = document.querySelector("#lname");
phoneNumber = document.querySelector("#phone");
address = document.querySelector("#address");
submitButton = document.querySelector("#submit");



btn.addEventListener("click", () => {
    if (password.value == "" || email.value == "" || confirmPassword.value == "") {
        alert("Fill all fields");
    } else if (password.value != confirmPassword.value) {
        err.innerHTML = "Password does not match";
    } else {
        err.innerHTML = "";
        console.log("Go to the next page");
        logIn.style.display = "none";
        socialMedia.style.display = "block";
    }
})
previous.addEventListener("click", () => {
    logIn.style.display = "block";
    socialMedia.style.display = "none";
})

secondButton.addEventListener("click", () => {
    if (twitter.value == "" || facebook.value == "" || googlePlus.value == "") {
    alert("Fill all fields");
    } else {
        console.log("Go to the next page");
        socialMedia.style.display = "none";
        personInfo.style.display = "block";
    }
})

secondPrevious.addEventListener("click", () => {
    socialMedia.style.display = "block";
    personInfo.style.display = "none";
})

submitButton.addEventListener("click", () => {
    if (firstName.value == "" || lastName.value == "" || phoneNumber.value == "" || address.value == ""){
        alert("Fill all fields");
    } else {
        logIn.style.display = "none";
        location.href = "PROJECT/index.html";

    }
    window.location.replace("http://127.0.0.1:5500/PROJECT/index.html");
})
