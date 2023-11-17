// Assignment Code
var generateBtn = document.querySelector("#generate");

// password generator function
function generatePassword() {
  // password criteria selection variables
  var includeLowercase = confirm ("Include lowercase?");
  var includeUppercase = confirm ("Include uppercase?");
  var includeNumbers = confirm ("Include numbers?");
  var includeSpecial = confirm ("Include special characters?");

  // confirmation that at least one character type has been selected by the user
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("Choose minimum one type of character.");
    return;
  }

  // character selection option pools
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numeric = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@\^_`|~";

  // lump selections into one empty string, resulting in a pool of potential characters for password generation
  var charPool = "";
   if (includeLowercase) charPool += lowercase;
   if (includeUppercase) charPool += uppercase;
   if (includeNumbers) charPool += numeric;
   if (includeSpecial) charPool += special;

// password length prompt (turning user entry into a number)
  var passLength = parseInt(prompt("Enter a password length between 8 and 128 characters:"));

// password generation from character and length selections (random selections from character pool at specified length placed in empty string which holds the password after generation)
  var password = "";
    for (i = 0; i < passLength; i++) {
      var random = Math.random() * charPool.length;
      password += charPool.charAt(random);
    }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);