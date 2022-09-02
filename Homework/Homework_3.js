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



function findIndex (array , number ) {
   for (let i = 0 ; i < array.length ; i++ ) {
    if (array[i]=== number) {
      return i; 
    }

   }
   return -1;
}
console.log(findIndex([4,1,6],3));



// 8 - ﻿Implement a loop that will print the number 'a' until it is less than 10



for (let rep = 1; rep < 10 ; rep++) {
    console.log(`a : ${rep}`)
}



// 9 - Implement a loop that prints prime numbers to the console 



for(let number=2 ; number<=100; number++){
  let isPrime = true;

for (let i=2; i<= number-1;i++){
  if(number%i===0){
      isPrime = false;
      break
  }
}
if (isPrime) console.log(number);
}



// 10 - Implement a loop that prints odd numbers to the console




for(let number=2; number<=12; number++){
  let isODD = false;

for (let i=2; i<= number-1;i++){
  if(number%i=== 0){
      isODD = true;
      break
  }
}
if (isODD) console.log(number);
}











