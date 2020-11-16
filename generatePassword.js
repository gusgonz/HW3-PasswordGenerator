// Create password generator function that is called on button click
function generatePassword() {

    // Prompting user and storing user input 
    var passwordObj = getInput();

    if (passwordObj.userHitCancel) {
        return;
    }

    if (!passwordObj.hasValidLength) {
        return alert("You must enter a valid length between 8 and 128 characters! Please press generate password button to try again.");
    }

    if (!passwordObj.hasAtLeastOne) {
        return alert("You must select at least one character type! Please press generate password button to try again.");
    }

    // Now that I know I have a valid length and at least one special character, I can call my generate function, which takes in the input array and returns the password 

    var password = passwordGenerator(passwordObj);

    var clearBtnEl = document.querySelector("#clear");
    clearBtnEl.setAttribute("style", "display: initial;");

    var copyBtnEl = document.querySelector("#copy");
    copyBtnEl.setAttribute("style", "display: initial;");

    var generateBtnEl = document.querySelector("#generate");
    generateBtnEl.setAttribute("style", "display: none;");


    return document.getElementById("password").textContent = password;
}




