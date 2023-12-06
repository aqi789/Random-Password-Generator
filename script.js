const passwordField = document.getElementById('pwd');
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=|{/?";
const all = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    passwordField.value = password;
}
function copyPassword() {
    passwordField.select();
    document.execCommand('copy');
    const copyAlert = document.getElementById('copyAlert');
    copyAlert.classList.add('show');
    setTimeout(() => {
        copyAlert.classList.remove('show');
    }, 3000);
}