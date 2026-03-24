/*
const city = 'Rostov'

console.log(typeof city);

const numb = 12

console.log(typeof numb);

const isTrue = true

console.log(typeof isTrue);

let blabla

console.log(typeof blabla);
*/

/* разница между ссылочным и примитивным типом данных в том что 
в ссылочном копируется адрес в памяти в то время как в примитивном копируется само содержимое
так же расход памяти уменьшается так как в ссылочном копируется только адрес
 в то время как в примитивном все содержаание 
*/

let a = 10
let b = a // здесь копируется само значение переменной а в b

b = 20 // и изминив b вывод будет разный 

console.log(a, b); // по итогу а остается = 10 а b уже будет =20

// но если использовать ссылочный тип то такого не бдует

let user = {
  name: 'Ivan'
}

let user2 = user // здесь уже копируется не обьект а ссылка на него 
// и изменив одно меняются оба

user2.name= 'Nikita'

console.log(user.name);
console.log(user2.name);





