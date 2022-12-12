// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить до 2 знаков после запятой)

const a = prompt();

if  (Number.isInteger(a)) {
    console.log(Math.sqrt(a));
} else console.log(Math.exp(a));