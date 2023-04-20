// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numeric = "1234567890".split("")
var special = "!@#$%^&*()".split("")

console.log(lowercase);
console.log(uppercase);
console.log(numeric);
console.log(special)


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
  if ()
  //add another validation for at least 1 = true

  // add new variable of all potential characters based on criteria
  // add 4 if statements
  //empty set of characters 
// if user picked ,,,
// ex. lower = true then the lower string would be added to the 

 
  console.log(characterLength);
  console.log(lowercaseYN);
  console.log(uppercaseYN);
  console.log(numericYN);
  console.log(specialYN);



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
