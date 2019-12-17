
// Creating funtion to get user input for their password
function userInput() {

    // Initial Prompt
    var userLength = prompt("Please enter a length between 8-128 characters for your randomly generated password.");

    // If they press cancel, return null
    if (userLength === null) {
        return null;
    }

    // Ask if they want any character types
    var userSpclChars = confirm("Do you want your password to contain special characters?");
    var userNums = confirm("Do you want your password to contain numbers?");
    var userLower = confirm("Do you want your password to contain lowercase letters?");
    var userUpper = confirm("Do you want your password to contain uppercase letters?");

    // Store the user inputted length and character types in array
    var userChoices = [userLength, userSpclChars, userNums, userLower, userUpper];

    // Return user choices array
    return userChoices;
}

function validateUserChoices(inputArray) {
    // If inputArray is null, then user pressed cancel. Return false to end generate password function 
    if (inputArray === null) {
        return false;
    }

    // Validates that input is between 8 and 128 characters
    var lengthNum = parseInt(inputArray[0]);
    console.log(lengthNum);
    if (Number.isNaN(lengthNum)) {
        return false;
    } else if ((lengthNum > 128) || (lengthNum < 8)) {
        return false;
    }
    
    // Making sure at least one character type exists. false if not
    atLeastOne = inputArray[1] || inputArray[2] || inputArray[3] || inputArray[4];

    // If at least one is false, return null to end generate password function
    if (!atLeastOne) {
        return null;
    }
    else {
        return true;
    }
}

// Creating function for error alerts to minimize clutter in generate password function
function errorNeedLength() {
    alert("You must enter a valid length between 8 and 128 characters! Please press generate password button to try again.");
}
function errorNeedAtLeastOne() {
    alert("You must select at least one character type! Please press generate password button to try again.")
}

// Summation function found via google fu. Sums items in an array
function arrSum(arr) {
    return arr.reduce(function(a,b) {
      return a + b;
    }, 0);
  }

// Tests for my summation function
// var array = [true, false, true, false];
// var array2 = [5, 6, 7];
// var array = [-1, 6, true];
// console.log(arrSum(array));
// console.log(arrSum(array2));

// Generates random password using user input array of criteria
function generate(userInputArray) {

    // Grabs length and turns into a number
    var length = parseInt(userInputArray[0]);

    // Saving the user character type choices
    var charTypes = [userInputArray[1], userInputArray[2], userInputArray[3], userInputArray[4]];

    var options = [specialChars, numbers, lowercase, uppercase];
    var choices = [];

    // Goes thru ands adds user choices to an array
    for (var i = 0; i < 4; i++) {
        if (charTypes[i]) {
            choices.push((i+1));
            console.log(choices);
        }
    }

    // Loop to create password
    var password = "";
    for (var x = 0; x < length; x++) {
        console.log(choices.length);
        var randomCharacterType = Math.floor(Math.random() * (choices.length - 1));
        console.log(randomCharacterType);
    }
    






}


// 26 special characters as string
var specialChars = "!#$%&()*+,-./:;<=>?@^_{|}~" ;
// 10 numbers as a string
var numbers = "0123456789"
// 26 lowercase letters as string
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// 26 uppercase letters as string
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Create password generator function that is called on button click
function generatePassword() {

    // Prompting user and storing user input 
    var userInputArray = userInput();

    console.log(userInputArray);
    // Validating user inputs. 
    var isValid = validateUserChoices(userInputArray);

    console.log(isValid);

    // If isvalid is false, then the length is invalid. alert error message
    if (isValid === null) {
        return errorNeedAtLeastOne();
    }
    // If isvalid is null, then at least one user type was not selected. alert error
    else if (!isValid) {
        return errorNeedLength();
    }

    // Now that I know I have a valid length and at least one special character, I can call my generate function, which takes in the input array and returns the password 

    password = generate(userInputArray);









}




