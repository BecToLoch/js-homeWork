/*
const scrt = [2, 3, 12, 15, 224, 11]

const scrt2 = scrt.map(num => num * num )
console.log(scrt2);
*/

/*
const num = [1, 2, 2, 3, 4, 5, 5, 5, 6]

const num2 = num.filter((item, index) => {
      return num.indexOf(item) === index
})
console.log(num2);
*/

/*
const number = [2, 3, 4, 12, 42]

const number2 = number.reduce((total, num) => total + num, 0)

console.log(number2);
*/

/*
const number = [2, 3, 4, 12, 42]

function reversNumber(arr) {
  let revers = []

  for (let i = number.length -1; i >= 0; i--) {
    revers.push(arr[i])    
  }
  return revers
}
console.log(reversNumber(number));
*/

const num = [1, 3, 42, 2]

num.push(23)// работает добовляет число 23
num.shift(1)// рвбответ удоляем первое число 
//num = [11, 23, 41]// не работает так как const нельзя переопределить 

console.log(num);

let num2 = ['dwdwf', 243, true]
let number = num2.map(String)// работает присваеваем всем переменным значение строки
num2 = [123123 , 'fefef', false]// работает так как let можно переопределить

console.log(number);
console.log(num2);


