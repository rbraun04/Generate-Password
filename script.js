


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
var characters = ["!","@","#","$","%","^","&","*","_","+"];
var password = [];
var finalpassword = [];
var confirmNumber = [];
var confirmCharacter =[];
var confirmUppercase = [];
var confirmLowercase =  [];
var ncu = [];
var nu = [];
var nl = [];
var nc = [];
var nul = [];
var ncl = [];
var cu = [];
var sl = [];
var ul = [];
var nsul = [];

var string = "";





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function writePassword() {

    var userPasswordLength = prompt("How long would you like your password to be? Password must be between 8-128 Characters");
  
   if (userPasswordLength < 8 || userPasswordLength > 128) {
      alert ("Password must be between 8 and 128.")
    }

  else {
      confirmNumber = confirm("Will your password contain numbers?");
      confirmCharacters = confirm("Will your password contain special characters?");
      confirmUppercase = confirm("Will your password contain Uppercase letters?");
      confirmLowercase = confirm("Will your password contain Lowercase letters?");
    };


  if (confirmNumber === false && confirmCharacters === false && confirmUppercase === false && confirmLowercase === false){
    alert("You must have a number, character, Uppercase letter, or Lowercase letter.");

  } 

  // Only Number Password
  else if (confirmNumber === true && confirmCharacters === false && confirmUppercase === false && confirmLowercase ===false){
      
      for (var i=0; i<userPasswordLength; i++) {


        var tempelement = numbers[Math.floor(Math.random() * numbers.length)];
           finalpassword.push(tempelement)
      
         
        // make finalpasswordstring array +=
        string = string + tempelement
  
      }
        console.log(finalpassword); 
         

    document.getElementById("password").value = string;
  }

  // Only Characters Password 
  else if (confirmNumber === false && confirmCharacters == true && confirmUppercase == false && confirmLowercase === false){

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = characters[Math.floor(Math.random() * characters.length)];
         finalpassword.push(tempelement)
    
       
      // make finalpasswordstring array +=
      string = string + tempelement

    }
      console.log(finalpassword); 

    document.getElementById("password").value = string;
  }

  // Only Uppercase Password

  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == true && confirmLowercase === false){
   
    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
         finalpassword.push(tempelement)
    
       
      // make finalpasswordstring array +=
      string = string + tempelement

    }
    
    document.getElementById("password").value = string;
  }

  //  Only Lowecase Password
  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == false && confirmLowercase === true){
    
    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
         finalpassword.push(tempelement)
    
       
      // make finalpasswordstring array +=
      string = string + tempelement

    }
    document.getElementById("password").value = string;
  }

  // Numbers, Characters, Uppercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == true && confirmLowercase === false){
        
      num(ncu)
      special(ncu)
      upperCase(ncu)
      console.log(ncu)
    

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = ncu[Math.floor(Math.random() * ncu.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  
  // Numbers, Uppercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == true && confirmLowercase === false){
    
    num(nu) 
    upperCase(nu)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = nu[Math.floor(Math.random() * nu.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  
  // Numbers and Lowercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == false && confirmLowercase === true){
    
    num(nl) 
    lowerCase(nl)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = nl[Math.floor(Math.random() * nl.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  
  // Numbers and Characters
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == false && confirmLowercase === false){
   
    num(nc)
    special(nc)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = nc[Math.floor(Math.random() * nc.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }

  //  Numbers, Uppercase and Lowercase
  else if (confirmNumber === true && confirmCharacters == false && confirmUppercase == true && confirmLowercase === true){
    
    num(nul)
    upperCase(nul)
    lowerCase(nul)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = nul[Math.floor(Math.random() * nul.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }

  // Numbers, characters, and Lowercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == false && confirmLowercase === true){
    
    num(ncl)
    special(ncl)
    lowerCase(ncl)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = ncl[Math.floor(Math.random() * ncl.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  } 
  
  
  // Character and Uppercase
  else if (confirmNumber === false && confirmCharacters == true && confirmUppercase == true && confirmLowercase === false){
    
    special(cu)
    upperCase(cu)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = cu[Math.floor(Math.random() * cu.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    
    document.getElementById("password").value = string;
  }
  // Character and Lowercase

  else if (confirmNumber === false && confirmCharacters == true && confirmUppercase == false && confirmLowercase === true){
    
    special(sl)
    lowerCase(sl)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = sl[Math.floor(Math.random() * sl.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  // Upper and Lowercase
  else if (confirmNumber === false && confirmCharacters == false && confirmUppercase == true && confirmLowercase === true){
    
    upperCase(ul)
    lowerCase(ul)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = ul[Math.floor(Math.random() * ul.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  // Number, Character, Upper and Lowercase
  else if (confirmNumber === true && confirmCharacters == true && confirmUppercase == true && confirmLowercase === true){
    
    num(nsul)
    special(nsul)
    upperCase(nsul)
    lowerCase(nsul)

    for (var i=0; i<userPasswordLength; i++) {

      var tempelement = nsul[Math.floor(Math.random() * nsul.length)];
      console.log(tempelement)
         finalpassword.push(tempelement)
    
      string = string + tempelement
      console.log(string)
    }
    document.getElementById("password").value = string;
  }
  }

  function num(arr) {
    for(var i = 0; i < numbers.length; i++) {
      arr.push(numbers[i])
    }
    return arr;
  }

  function special(arr) {
    for(var i = 0; i < characters.length; i++) {
      arr.push(characters[i])
    }
    return arr;
  }

  function upperCase(arr) {
    for(var i = 0; i < capitalLetters.length; i++) {
      arr.push(capitalLetters[i])
    }
    return arr;
  }

  function lowerCase(arr) {
    for(var i= 0; i < lowercaseLetters.length; i++) {
      arr.push(lowercaseLetters[i])
    }
    return arr;
  }