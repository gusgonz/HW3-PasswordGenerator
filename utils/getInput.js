function getInput() {

    var password = {};

    // Initial Prompt
    var passwordLengthInput = prompt("Please enter a length between 8-128 characters for your randomly generated password.");
    password.userHitCancel = passwordLengthInput === null;

    password.length = parseInt(passwordLengthInput);

    password.hasValidLength = (password.length <= 128) && (password.length >= 8);

    if (!password.userHitCancel && password.hasValidLength) {

        // Ask if they want any character types
        var useSpclChars = confirm("Do you want your password to contain special characters?");
        var useNums = confirm("Do you want your password to contain numbers?");
        var useLower = confirm("Do you want your password to contain lowercase letters?");
        var useUpper = confirm("Do you want your password to contain uppercase letters?");

        // Store the user inputted length and character types in array
        password.hasAtLeastOne = useSpclChars || useNums || useLower || useUpper;
        password.passwordPrefs = [useSpclChars, useNums, useLower, useUpper];
    }

    // Return user choices array
    return password;
}

   // password = {
    //     length: any,
    //     prefs: [passwordPrefs],
    //     hasValidLength: bool,
    //     userHitCancel: bool,
    //     hasAtLeastOne: bool,
    // }

