/*
const text = prompt('введите слово')

const palindromom = (str) => {

  const revers = str.split().reverse().join()
  return str === revers
}

console.log(palindromom(text));
*/

/*
const text = prompt('введите текст')

const a = (str) => {
  return str.split(' ').reduce((short, current) =>{
    return current.length < short.length ? current : short
  })
}
console.log(a(text));
*/

/*
const number = prompt('введите номер')

const createPhoneNumber = (num) => {
  return num.slice(0, 1) + ' (' + (num.slice(1, 4)) + ') ' + num.slice(4, 7) + '-' + num.slice(7,10)
  
}

console.log(createPhoneNumber(number));
*/

/*
const masiv = [1, 243, 21, 54, 12]

const srcNumber = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return `минимальное чилсо масcива ${min}, а максимальное ${max}`

}

console.log(srcNumber(masiv));
*/

const masiv = [1, 233, 12, 2, 42, 421]

const sortMasiv = (arr) => {
  return [...arr].sort((a, b) => a - b)
}

const newSortMasiv = sortMasiv(masiv)

console.log(masiv);
console.log(newSortMasiv);
