/*
const user = {
  name: 'Ivan',
  age: 21,
  hobbi: ['gaming', 'music', 'IT']
}

console.log(user);

for( let key in user){
  if (Array.isArray(user[key])) {
      console.log(`${key}: ${user[key].join(', ')}`);
  }else {
      console.log(`${key}: ${user[key]}`);
  }
}
*/


const user = {
  name: 'Ivan',
  age: 21,
  hobbi: ['gaming', 'music', 'IT']
}

user.name = 'Nikita'
user.city = 'Moscow'
delete user.hobbi

console.table(user);


