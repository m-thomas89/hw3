// Assignment Code
//  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);


var numeric = ["0", "1", "2", "3", '4','5', '6', '7', '8', '9'];
var specCharac = ['!', '@', '#', '$', '%', '^', '&', '*', "(", ')', '?', '/', '<', "~"];
var alphabetLow = ["a", "b", "c", "d", "e", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];


var verifyLength = "";
var verifyNumericCharacter; 
var verifySpecialCharacter;
var verifyLowerCase;
var verifyUpperCase;


function generatePassword() {
  var verifyLength = (prompt("Hey user, how many characters do you want your password to be?"));

  while(verifyLength <=7 || verifyLength >=129) {
    alert("Hey user, your passowrd length most be between 8-128 characters.");
    var verifyLength = (prompt("Hey user, how many characters do you want your password to be?"));
  }

    var verifyNumericCharacter = confirm("Hey user, do you want Alpha Numeric Character in your passowrd");
    var verifySpecialCharacter = confirm("Hey user, do you want Special Character in your passowrd");
    var verifyLowerCase = confirm("Hey user, do you want Lower Case Character in your passowrd");
    var verifyUpperCase = confirm("Hey user, do you want Upper Case Character in your passowrd");

    var  passwordChar = []
     
    if(verifyNumericCharacter) {
      passwordChar = passwordChar.concat(numeric)
    }

    if(verifySpecialCharacter) {
      passwordChar = passwordChar.concat(specCharac)
    }

    if(verifyLowerCase) {
      passwordChar = passwordChar.concat(alphabetLow)
    }

    if(verifyUpperCase) {
      passwordChar = passwordChar.concat(alphabetUp)
    }


    var anyPasskey = ""

    for(var i = 0; i < verifyLength; i++) {
      anyPasskey = anyPasskey + passwordChar[Math.floor(Math.random() * passwordChar.length)];    
    }

    return anyPasskey;
}