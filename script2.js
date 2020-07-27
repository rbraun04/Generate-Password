


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var characters = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var password = [];
var finalpassword = [];
var confirmNumber = [];
var confirmCharacter =[];
var confirmUppercase = [];
var confirmLowercase =  [];




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var userPasswordLength = prompt("How long would you like your password to be? Password must be between 8-128 Characters");
    
  for (var i=0; i<password.length; i++){ 
      password.length = userPasswordLength;
      console. log(password)

    if (userPasswordLength < 8 || userPasswordLength > 128) {
        alert ("Password must be between 8 and 128.")
      }

  else {
      confirmNumber = confirm("Do you want your password to contain numbers?");
      confirmCharacters = confirm("Do you want your password to contain special characters?");
      confirmUppercase = confirm("Do you want your password to contain Uppercase letters?");
      confirmLowercase = confirm("Do you want your password to contain Lowercase letters?");
    };


  if (confirmNumber === false && confirmCharacters === false && confirmUppercase === false && confirmLowercase === false){
    alert("You must choose either a number, character, Uppcase Letter, or Lowercase lettr.");

  } 

  
   
    console. log(password)

  // Only Number Password
      if (confirmNumber === true && confirmCharacters === false && confirmUppercase === false && confirmLowercase ===false){
          password.push(i + numbers)
        
        
        finalpassword = password[Math.floor(Math.random() * password.length)];
 
         
        console.log(password); 
 
  }


        


    document.getElementById("password").value = finalpassword;
  

  // Only Characters Password 
  if (confirmNumber === false && confirmCharacters == true && confirmUppercase == false && confirmLowercase === false){


    document.getElementById("password").value = finalpassword;
  }

  // Only Uppercase Password

  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == true && confirmLowercase === false){


    document.getElementById("password").value = finalpassword;
  }

  //  Only Lowecase Password
  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == false && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }

  // Numbers, Characters, Uppercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == true && confirmLowercase === false){
    
    document.getElementById("password").value = finalpassword;
  }
  
  // Numbers, Uppercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == true && confirmLowercase === false){
    
    document.getElementById("password").value = finalpassword;
  }
  
  // Numbers and Lowercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == false && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }
  
  // Numbers and Characters
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == false && confirmLowercase === false){
    
    document.getElementById("password").value = finalpassword;
  }

  //  Numbers, Uppercase and Lowercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == true && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }

  // Numbers, characters, and Lowercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == false && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  } 
  
  // Characters, Lowercase and Uppercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == true && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }
  // Character and Uppercase
  else if (confirmNumber === false && confirmCharacters == true && confirmUppercase == true && confirmLowercase === false){
    
    document.getElementById("password").value = finalpassword;
  }
  // Character and Lowercase

  else if (confirmNumber === false && confirmCharacters == true && confirmUppercase == false && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }
  // Upper and Lowercase
  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == true && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }
  // Number, Character, Upper and Lowercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == true && confirmLowercase === true){
    
    document.getElementById("password").value = finalpassword;
  }


}  
}