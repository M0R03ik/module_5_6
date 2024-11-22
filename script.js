// Задание 5.10.1

const userNumber = +prompt('Введите любое число')
alert(
  `Введённое число - ${userNumber} \nКвадрат числа - ${
    userNumber ** 2
  } \nКуб числа - ${userNumber ** 3}`
)

// Задание 5.10.2
/*
const userPromo = prompt("Введите промокод").toLowerCase();
const promo = "скидка";

if (userPromo === promo) {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}
*/

// Задание 5.10.3
/*
const userName = prompt("Введите свое имя");
const userBirthYear = +prompt("Введите год рождения");
if (isNaN(userBirthYear)) {
    alert("Год должен быть числом!");
} else {
    alert(`${userName}: ${2024 - userBirthYear}`);
}
*/

// Задание 5.10.4
/*
const userName = prompt("Введите свое имя");
const userBirthYear = +prompt("Введите год рождения");
const userAge = 2024 - userBirthYear;
if (isNaN(userBirthYear)) {
    alert("Год должен быть числом!");
} else {
    if (userAge % 10 === 1) {
        alert(`${userName}: ${userAge} год`);
    }
    if (userAge % 10 === 2 || userAge % 10 === 3 || userAge % 10 === 4) {
        alert(`${userName}: ${userAge} года`);
    } else {
        alert(`${userName}: ${userAge} лет`);
    }   
}
*/

// Задание 5.10.5
/*
const userAge = prompt("Введите свой возраст");
let userRequest = null;

if (userAge === null) {
    alert("Видимо вам кредит не нужен. Всего доброго!")
} else{
    if (isNaN(+userAge)) {
        alert("Возраст должен быть числом!");
    } else {
        if (userAge < 18) {
            alert("Кредит не одобрен");
        } else {
            if (18 <= userAge && userAge <= 21) {
                userRequest = +prompt("Мы можем вам выдать максимум 50000.\nВведите сумму кратную 1000.");
            } else if (22 <= userAge && userAge <= 35) {
                userRequest = +prompt("Мы можем вам выдать максимум 400000.\nВведите сумму кратную 1000.");
            } else if (36 <= userAge && userAge <= 65) {
                userRequest = +prompt("Мы можем вам выдать максимум 1000000.\nВведите сумму кратную 1000.");
            }
            if (isNaN(userRequest)) {
                userRequest = +prompt("Сумма должна быть числом. \nВведите сумму кратную 1000.")
            }
            if (userRequest % 1000 !== 0) {
                alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${userRequest - userRequest % 1000}`)
            } else {
                alert(`Вам одобрен кредит на сумму ${userRequest}`);
            }
        } 
    
    }
    
}
*/
