// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*()";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Series of prompts to set the password parameters
function generatePassword() {
  var characterLength = prompt("How many total characters do you need? (8 - 128 characters)", "8")

  if ((characterLength < 8) || (characterLength > 128)) {
    alert("Please select a valid number of total characters.")
    return "";
  }
  var lowercaseYN = confirm("Do you need lowercase characters? (Ex. n, u, i)")
  var uppercaseYN = confirm("Do you need uppercase characters? (Ex. N, U, I)")
  var numericYN = confirm("Do you need numeric characters? (Ex. 1, 5, 4)")
  var specialYN = confirm("Do you need special characters? (Ex. *, !, $)")
  
  //validation for at least 1 = true
  if ((lowercaseYN === false) && (uppercaseYN === false) && (numericYN === false) && (specialYN === false)) {
    alert("Please select at least one character type.")
    return "";
  } 
  
  //generates pool of accessible characters based on use input
  var criteriaCharacters = "";
  if (lowercaseYN === true) {
    criteriaCharacters = criteriaCharacters.concat(lowercase)
  }
  if (uppercaseYN === true) {
    criteriaCharacters = criteriaCharacters.concat(uppercase)
  }
  if (numericYN === true) {
    criteriaCharacters = criteriaCharacters.concat(numeric)
  }
  if (specialYN === true) {
    criteriaCharacters = criteriaCharacters.concat(special)
  } 
  console.log(criteriaCharacters);

  
  for (i = 0; i < characterLength; i++) {
    var randomCharacter = criteriaCharacters[Math.floor(Math.random() * criteriaCharacters.length)]
    console.log(randomCharacter[i]);
    placeHold = ""
    /* password = placeHold.prototype.push(randomCharacter[i]) */
    
  }
  console.log(password)
  
  return(password);
  } 
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);