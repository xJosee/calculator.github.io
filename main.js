const $All = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const $btns = $All('.button');
const $result = $('.results');

let values = Array(3);
let result = '';

const operators = {
    '+': (num1, num2) => Number(num1) + Number(num2),
    '-': (num1, num2) => Number(num1) - Number(num2),
    '/': (num1, num2) => Number(num1) / Number(num2),
    'x': (num1, num2) => Number(num1) * Number(num2),
};

$btns.forEach(($btn) => {
    $btn.addEventListener('click', operation);
});

function operation(e) {
    let value = e.target.textContent; // [num || operator || del || reset || '='];

    if (value == 'del' || value == 'reset') result = '';
    // verifica que venga '=' y que los valores a operar sean numeros
    if (value == '=' && !isNaN(values[0]) && !isNaN(result)) result = operators[values[1]](values[0], result);
    //verifica si es un operador y guarda el primer operador y el operador
    if (operators[value]) [values[1], values[0], result] = [value, Number(result), ''];
    //concatena los numeros
    else result += value;

    if (!isNaN(result)) $result.textContent = result;
}
