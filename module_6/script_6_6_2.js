const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  'they',
  "don't",
  'know',
  'that',
  'we',
  'know',
  'that',
  'they',
  'know',
]

function getUniqArray(array) {
  const uniqArray = []

  array.forEach(element => {
    if (!uniqArray.includes(element)) {
      uniqArray.push(element)
    }
  })

  console.log(uniqArray)
}

getUniqArray(arr)
