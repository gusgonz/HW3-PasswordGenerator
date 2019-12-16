
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
    var userUpper = confirm("Do you want your password to contain special characters?");

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
    if (lengthNum === NaN) {
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
}

// Creating function for error alerts to minimize clutter in generate password function
function errorNeedLength() {
    alert("You must enter a valid length between 8 and 128 characters! Please press generate password button to try again.");
}
function errorNeedAtLeastOne() {
    alert("You must select at least one character type! Please press generate password button to try again.")
}

// Create password generator function that is called on button click
function generatePassword() {

    // Prompting user and storing user input 
    var userInputArray = userInput();

    // Validating user inputs. 
    isValid = validateUserChoices(userInputArray);

    // If isvalid is false, then the length is invalid. throw error
    if (isValid === null) {
        return errorNeedAtLeastOne();
    }
    // If isvalid is null, then at least one user type was not selected. throw error
    else if (!isValid) {
        return errorNeedLength();
    }




}




