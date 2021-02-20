// DOM elements
const resultEl = document.getElementById ('result');
const lengthEl = document.getElementById ('length');
const uppercaseEl = document.getElementById ('uppercase');
const lowercaseEl = document.getElementById ('lowercase');
const numbersEl = document.getElementById ('numbers');
const symbolsEl = document.getElementById ('symbols');
const generateEl = document.getElementById ('generate');
const clipboardEl = document.getElementById ('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol, 
};

generateEl.addEventListener('click', (button) => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    ); 
});

// Copy password to clipboard 
clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText; 
  
  if (!password) {
    return; 
  }

  textarea.value = password;
  document.body.appendChild(textarea); 
  textarea.select();
  document.execCommand('copy'); 
  textarea.remove();
  alert('Password copied to clipboard!'); 
}); 

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
// 1. Initialize passwork variable
// 2. Filter out unchecked types
// 3. Loop over length call generator function for each type
// 4. Add final passwork to the passwork variable and return

 let generatedPassword ='';

 const typesCount = lower + upper + number + symbol;

 // consloe.log('typesCount:', typesCount); 

 const typesArr =[{ lower },{ upper },{ number },{ symbol }].filter
(
  item => Object.values(item)[0]
); 

  // console.log('typesArr: ', typesArr);

  if (typesCount== 0) {
    return '';
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      
       // console.log('funcName: ', funcName); 

      generatedPassword += randomFunc[funcName](); 
    }); 
  }

  const finalPassword = (generatedPassword.slice(0, length)); 

  return finalPassword; 
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', (button) => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    ); 
});


// Generator functions 

function getRandomLower() {
  const lower = 'abcdefghijklmnopqrstuvqxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}
function getRandomUpper() { 
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}
function getRandomNumber() {
  const numbers = '0123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomSymbol() {
  const symbols = '~!@#$%^&*()_+~{}|":<>?'; 
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}