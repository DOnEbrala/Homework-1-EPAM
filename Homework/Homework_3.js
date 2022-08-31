// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
// Given an array of car manufacturers, convert the array to a string and back to an array
// Given an array of the names of your friends, add the words hello to each element of the array
// Convert numeric array to Boolean
// Sort the array [1,6,7,8,3,4,5,6] in descending order
// Filter array [1,6,7,8,3,4,5,6] by value> 3
// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
// ﻿Implement a loop that will print the number 'a' until it is less than 10
// Implement a loop that prints prime numbers to the console
// Implement a loop that prints odd numbers to the console




// 1 - Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console



const arrayOfMovies = ['TopGun' , 'Cars' , 'Sao', 'Titanic'];

arrayOfMovies.forEach(name => console.log(name));



// 2 - Given an array of car manufacturers, convert the array to a string and back to an array



const arrayOfCars = ["Ferrari" , "Mitsubishi" , "Mercedes" , "Ford"];

const arrayOfCarManufacturers = arrayOfCars.map(Currentcars => Currentcars.toString())

console.log(arrayOfCarManufacturers);



// 3 - Given an array of the names of your friends, add the words hello to each element of the array



let arrayOfMyfriends = ['Giorgi', 'Salome' , 'Saba' , 'Grisanti'];

arrayOfMyfriends.forEach((name) => {
    return console.log (`Hello: ${name}`)
})



// 4 - Convert numeric array to Boolean



// let arrayOfNumbers = [5 , 23 , 44 , 55 , 33];

// const arrayOfNumbersBooleans = arrayOfNumbers.filter(CurrentNumbers => !!CurrentNumbers);

// console.log(typeof(arrayOfNumbersBooleans));



const arrayOfNumbers = new Array(3);

for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = false;
}

console.log(arrayOfNumbers);




// 5 - Sort the array [1,6,7,8,3,4,5,6] in descending order



let arrayDescend = [1,6,7,8,3,4,5,6];
arrayDescend = arrayDescend.sort(function (a, b) {  return b - a;  });

console.log(arrayDescend);



// 6 - Filter array [1,6,7,8,3,4,5,6] by value> 3



const arrayOfThree = [1,6,7,8,3,4,5,6];

arrayOfInt = arrayOfThree.filter(index => index > 3 );

console.log(arrayOfInt);



// 7 - Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number



const arrayNumbers = [1,2,5,10,55];
const randomnumber = 2;


// arrayNumbers.forEach((nika, index) => {
//     const ind = index;
//     randomnumber.
// });

// console.log (ragac);
// const RN = arrayNumbers.filter(currentnumb => currentnumb === randomnumber );

// console.log(RN);

for (let i = 0; i < arrayNumbers.length; i++) {

console.log(i)
}


// tu amas aqvs igivie value rac aqvs imas mashin dawere eg value 


//##########################################
// const array1 = [1, 2, 3];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// } 



//############


for (let i=0; i < arrayNumbersy.size() ; i++){
    console.log(i)
}


// let name  =['noor','alex','biker','hosler']
// let ages = [ 11 , 13 , 15 , 17];

// const newvalue=(
//     name.map((nameArrayElement,index)=>{
//         return [nameArrayElement,ages[index]]
//     })
// )
// console.log(newvalue);




// 8 - ﻿Implement a loop that will print the number 'a' until it is less than 10



for (let rep = 1; rep < 10 ; rep++) {
    console.log(`a : ${rep}`)
}



// 9 - Implement a loop that prints prime numbers to the console 



function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }

}

console.log(test_prime(12));



// 10 - Implement a loop that prints odd numbers to the console



function test_odd(o)
{

  if (o === 1)
  {
    return false;
  }
  else if(o === 2)
  {
    return true;
  }else
  {
    for (var x = 3; x < o; x++)
    {
      if(o % x === 0)
      {
        return false;
      }
    }
    return true;  
  }

}

console.log(test_odd(17))



















