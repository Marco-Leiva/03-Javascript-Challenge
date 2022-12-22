// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
    length: "",
    lowercase: "",
    uppercase: "",
    numeric: "",
    specialCharacters: ""
}

var characterTypes = function() {
  
  // Lowercase Option //
  passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Answer yes or no.");
  passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
  if (passwordCriteria.lowercase === "yes") {
    window.alert("Lower case characters have been included.");
    passwordCriteria.lowercase = true;
  }
  else if (passwordCriteria.lowercase === "no") {
    window.alert("Lower case characters have not been included.");
    passwordCriteria.lowercase = false;
  }
  
  // Uppercase Option //
  passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Answer yes or no.");
	passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
	if (passwordCriteria.uppercase === "yes") {
		window.alert("Upper case characters have been included.");
		passwordCriteria.uppercase = true;
	}
	else if (passwordCriteria.uppercase === "no") {
		window.alert("Upper case characters have not been included.");
		passwordCriteria.uppercase = false;
  }
  
  // Numbers Option //
  passwordCriteria.numeric = window.prompt("Do you want to include numbers? Answer yes or no.");
	passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
	if (passwordCriteria.numeric === "yes") {
		window.alert("Numbers have been included.");
		passwordCriteria.numeric = true;
	}
	else if (passwordCriteria.numeric === "no") {
		window.alert("Numbers have not been included.");
		passwordCriteria.numeric = false;
	}
  
  // Special Characters Option //
  passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Answer yes or no.");
	passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
	if (passwordCriteria.specialCharacters === "yes") {
		window.alert("Special Characters have been included.");
		passwordCriteria.specialCharacters = true;
	}
	else if (passwordCriteria.specialCharacters === "no") {
		window.alert("Special Characters have not been included.");
		passwordCriteria.specialCharacters = false;
	}
  
  // If no Option is Selected //
  if (passwordCriteria.lowercase === false && 
		passwordCriteria.uppercase === false && 
		passwordCriteria.numeric === false && 
		passwordCriteria.specialCharacters === false) {
		window.alert("You need to pick at least one character type.");
		characterTypes();
	}
}

// Generate Password //
var generatePassword = function() {
  passwordCriteria.length = window.prompt("Choose password length. (Must be more than 8 characters, and no more than 128.");
  passwordCriteria.length = parseInt(passwordCriteria.length);
    if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
		window.alert("Not a valid length, please try again.");
		generatePassword();
	}
	else {
		window.alert("Password length is " + passwordCriteria.length + ".");
	}

  window.alert("Select charater types for password. Select at least one.");

  characterTypes();
  
  window.alert("Password is being generated.");

  function makePassword() {
    var characters = "";
    if (passwordCriteria.lowercase === true) {
      characters = "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordCriteria.uppercase === true) {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordCriteria.numeric === true) {
      characters = characters + "1234567890";
    }
    if (passwordCriteria.specialCharacters === true) {
      characters = characters + "!@#$%^&*()_+-=[]{}\|;:,.<>/?";
    }
    var result = "";
    var length = passwordCriteria.length;
    for (var i = 0, n = characters.length; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * n));
    }
    window.alert("Your generated password is " + result);
    return result;
  }

  makePassword();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
