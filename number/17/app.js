// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления
const a = +prompt('Введите число');
const b = +prompt('Введите число');
if (a % b === 1) {
    console.log('делится с остатком', a / b);
} else {
    console.log('делится без остатка', a / b);
}


