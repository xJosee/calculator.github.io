const $All = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const $btns = $All('.button');
const $result = $('.results');

var result = '';

let operators = {
    '+': (num1, num2) => Number(num1) + Number(num2),
    '-': (num1, num2) => Number(num1) - Number(num2),
    '/': (num1, num2) => Number(num1) / Number(num2),
    'x': (num1, num2) => Number(num1) * Number(num2),
};

let operator = null;
let temp = null;

$btns.forEach(($btn) => {
    $btn.addEventListener(('click'), operation);
});

function operation(e) {
    let value = e.target.textContent;

    if (value == 'del' || value == 'reset') {
        result = '';
        temp = '';
        operator = '';
    }
    //verifica si es un operador
    else if (operators[value]) {
        operator = value;
        temp = Number(result);
        result = '';
    }
    // se efectura la operacion
    else if (value == '=' && !isNaN(temp) && !isNaN(result)) result = operators[operator](temp, result);
    else result += value;

    if (!isNaN(result)) $result.textContent = result;
}