const masiv = [1, 2, 3, 44, 21]

/*
function value (arr){
  const sum = arr.reduce((acc, number) => acc + number, 0)
  return sum / arr.length
}

console.log(value(masiv));
*/

const person = {
  name: 'Ivan',
  age: 21,
  country: 'Russia'
}

/*
const {name: userName, age: userAge} = person

console.log(userName, userAge);
*/
 
/*
const masiv2 = [12, 223, 42, 
  {
    name: 'ivan',
    age: 21,
    hobbies: ['coding', 'gaming'],
    adress: {city: 'Moscow'}
  }
]

const [ , , fortyTwo, {name, age, adress: {city}}] = masiv2

console.log(fortyTwo);
console.log(name);
console.log(city);
*/

/*
const masiv3 = [1, 2, 32, 24]

const newMasiv = ['Start', 0, ...masiv3, 100, 'End']

console.log(newMasiv);
*/

const user = {
  id: 1,
  name: 'Ivan',
  age: 21,
  email: 'ivan@example.com'
};

function removeProperty(obj, keyToDelete) {
  const { [keyToDelete]: deleted, ...rest } = obj;
  return rest;
}

const result = removeProperty(user, 'email');

console.log(result); 

