// Запросите у пользователя любое число. На основании ответа создайте массив и заполните его числами от нуля до введённого числа.

const userNumber = +prompt('Введите число', 0)

let number = 0
const newArray = []

while (number <= userNumber) {
  newArray.push(number)
  number++
}

console.log(newArray)
