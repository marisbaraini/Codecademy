///Whale talk project
let input = 'i love taylor swift'
const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []
for (let index = 0; index < input.length; index++){
  if (input[index] === 'e') {
    resultArray.push(input[index])
  }
  if (input[index] === 'u') {
    resultArray.push(input[index])
  }
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    if (input[index] === vowels[vowelsIndex]){
      resultArray.push(vowels[vowelsIndex])
      console.log(resultArray)
    }
  }
}

let resultString = resultArray.join('').toUpperCase()
console.log(resultString)
