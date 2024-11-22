// Напишите проверку, которая позволит определить, является слово палиндромом или нет.

// Если является, то выведите в консоль фразу «Слово <слово> является палиндромом». Если нет — «Слово <слово> не является палиндромом».

function isPalindrome(word) {
  let mirroredWord = word.toLowerCase().split('').reverse().join('')

  console.log(mirroredWord)

  if (mirroredWord === word.toLowerCase()) {
    console.log(`Слово ${word} является палиндромом`)
  } else {
    console.log(`Слово ${word} не является палиндромом`)
  }

  ;`Слово ${word} является палиндромом`
}

isPalindrome('Сантимент')
isPalindrome('Довод')
