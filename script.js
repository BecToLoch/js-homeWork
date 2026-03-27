/*
for(let i = 1; i <= 10; i++){
  console.log(i);
  
}
*/

/*
let i = 1
let sum = 0
while(i <= 100){
  
  sum = sum + i
  i++
}
console.log(sum);
*/

for(let i = 2; i <=100; i++){
  let isPrime = true

  for(let j = 2; j < i; j++){
    if(i % j === 0){
      isPrime = false
      break
    }
  }
  if(isPrime){
    console.log(i);
    
  }
}