// Generates random password using user input array of criteria

function passwordGenerator(passwordObj) {
    // 26 special characters as string
    var specialChars = "!#$%&()*+,-./:;<=>?@^_{|}~";
    // 10 numbers as a string
    var numbers = "0123456789";
    // 26 lowercase letters as string
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    // 26 uppercase letters as string
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    var possibleOptions = [specialChars, numbers, lowercase, uppercase];
    var userChoices = [];

    // Goes thru ands adds user choices to an array
    passwordObj.passwordPrefs.forEach((hasPref, index) => {
        if (hasPref) userChoices.push(possibleOptions[index]);
    });

    // Loop to create password
    var password = "";

    // 1st loop to randomly add one character type for the length of the password minus the length of the choices array
    for (var i = 0; i < (passwordObj.length - userChoices.length); i++) {
        // Picks random string of character types from choices array
        var randomIndex = Math.floor(Math.random() * (userChoices.length));

        // Chooses random index from 0 - length of the string of chosen character type - 1
        // Decides index of next character within the type
        var nextCharacterIndex = Math.floor(Math.random() * (userChoices[randomIndex].length - 1));

        password = password + userChoices[randomIndex][nextCharacterIndex];
    }

    // 2nd loop to guarantee at least one of each user type is included in the password
    for (var i = 0; i < userChoices.length; i++) {
        var nextCharacterIndex = Math.floor(Math.random() * (userChoices[i].length - 1));
        password = password + userChoices[i][nextCharacterIndex];
    }

    return password;
}