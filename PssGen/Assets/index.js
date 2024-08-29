var startGerador = document.getElementById('start-btn');
var tamanhoSenha = document.getElementById('size'); // To update text based on the value change
var valorSenha = document.getElementById('tamanho-senha'); // The Value = password length
var check = document.getElementById('special'); // Check if special characters should be included
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
var inputText = document.getElementById('pss-gen');

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const comecarGerador = function () {
  let password = [];
  let pss = '';

  let characters = letters;
  if (check.checked === true) {
    characters += specialCharacters; // Add special characters if checkbox is checked
  }

  while (password.length < valorSenha.value) {
    let randomIndex = randNumber(0, characters.length - 1);
    password.push(characters[randomIndex]);
  }

  // Combine the password array into a single string
  pss = password.join('');

  // Set the generated password in the input field
  inputText.value = pss;
};

startGerador.addEventListener('click', comecarGerador);
