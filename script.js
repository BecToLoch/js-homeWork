//let num = Number(prompt('введи число'))

/*
switch (true){
  case(num > 0):
    console.log('число положительное');
    break
  case(num < 0):
    console.log('число отрицательное');
    break
  case(num = 0):
    console.log('число рано нулю');
    break
  default:
    console.log('это не число');
}

console.log(num);
*/

/*
const result =  num === '1' ? 'напишите число' 
      : num > 0 ? 'число положительное' 
      : num < 0 
      ? 'число отрицательное'
      : 'равно нулю'

console.log(result);
*/

/*
if (num === Number('1')){
  console.log('введите число');
} else if (num > 0){
  console.log('положительное');
}else if (num < 0){
  console.log('отрицательное');
}else{
  console.log('равно нулю');
}

console.log(num);
*/

/*
let height = Number(prompt('введите рост'))
let weight = Number(prompt('введите вес'))


if (!height || isNaN(height) || !weight || isNaN(weight)){
  console.log('введите коректное значение');
}else{
  if(height > 3) height = height / 100

  const IMT = weight / height ** 2
  console.log('Ваш ИМТ', IMT.toFixed(1));
  
  switch (true) {
    case (IMT <= 18.5):
      console.log('дефицит массы');
      break;
    case (IMT >= 18.5 && IMT <= 24.9):
      console.log('здоровый диапозон');
      break;
    case (IMT >= 25.5 && IMT <= 29.9):
      console.log('у вас предожирение');
      break;
    case (IMT >= 30):
      console.log('у вас ожирение');
      break;    
    default:
      console.log('ошибка расчета');
  }
}
*/

/*
let month = Number(prompt('введите число месяца месяц'))
let monthName

if (!month || isNaN(month)){
  console.log('введите коректно');
}else{

  switch (month) {
    case 1:
      monthName = 'январь';
      break;
    case 2:
      monthName = 'февраль';
      break;
    case 3:
      monthName = 'март';
      break;
    case 4:
      monthName = 'апрель';
      break;
    case 5:
      monthName = 'май';
      break;
    case 6:
      monthName = 'июнь';
      break;
    case 7:
      monthName = 'июль';
      break;
    case 8:
      monthName = 'август';
      break;
    case 9:
      monthName = 'сентябрь';
      break;
    case 10:
      monthName = 'октябрь';
      break;
    case 11:
      monthName = 'ноябрь';
      break;
    case 12:
      monthName = 'декабрь';
      break;                    
    default:
      monthName = 'неверный месяц' ;
  }
  console.log(monthName);
}
*/

let discount
let userStatus = prompt('введите ваш стасус')

if (!userStatus || userStatus.trim() === ''){
  console.log('введите статус');
}else{

  userStatus = userStatus.toLowerCase()

  if (!['vip', 'dimond', 'gold'].includes(userStatus)){
    console.log('здраствуйте гость');
  }else{

    switch (userStatus) {
      case 'gold':
        discount = '10%'
        console.log(`здраствуйте ваша скидка ${discount}`);
        break;
      case 'dimond':
        discount = '15%'
        console.log(`здраствуйте сударь ваша скидка ${discount}`);
        break;
      case 'vip':
        discount = '25%'
        console.log(`здраствуйте очарование ваша скидка ${discount}`);
        break;  
      default:
        break;
    }
  }
}