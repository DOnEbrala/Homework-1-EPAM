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



//##################

// let sum = 0;

// for (let i = 0; i < 6 ; i++) {
//     sum += i;
//     console.log(i);
// }

// console.log(sum);

//#################### 1

// const arr = [1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//##################### 2

// const arr = [1,2,3,4,5]
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);



//########E######################

// const obj = {
//     name: "nika",
//     lastName: "ebralidze"


// };

// for (let key in obj) {
//     console.log(obj[key]);

// }

//##########იგივე რაც 1 და 2 მარა უკეთესი

// const arr = [1,2,3,4,5];
// let sum = 0;

// for (let el of arr) {
//     console.log(el);
//     sum += el;
// }
// console.log(sum);



//###############################

// let sum = 0;
// let i = 0;

// while ( i < 5 ) {
//     i++; //i= i +1 
//     sum +=i; //sum = sum + i

// }

// console.log(sum);

// do {
//     i++; //i= i +1 
//     sum +=i; //sum = sum + i
// } while ( i < 9 );

// console.log(sum);


//#####################################

// const arrayOfNumbers = [1 ,5 ,2,63,11 ,42];


// const arrayofEvenNumbers = arrayOfNumbers.filter(currentNumber => currentNumber % 2 === 0);

// console.log(arrayofEvenNumbers);

// console.log( )
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const arrayOfNumbers = [1, 5, 6 , 2, 15];
// const arrayofMultipliedNumbers = arrayOfNumbers.map((currentNumber) => currentNumber * 2);

// console.log(arrayofMultipliedNumbers);



//######################################
//1
// const arrayOfName = ['Nika' , 'Sandra' , 'Alice' , 'Giorgi' , 'Nato'];

// arrayOfName.forEach(name => console.log(name));

//2
// const arrayOfName = ['Nika' , 'Sandra' , 'Alice' , 'Giorgi' , 'Nato'];

// arrayOfName.forEach((name, index) => {
//     return console.log(`Element index:${index} Element value: ${name}`)
// });

//3
// const arrayOfName = ['Nika' , 'Sandra' , 'Alice' , 'Giorgi' , 'Nato'];

// arrayOfName.forEach((name, index, arr) => {
//     return console.log(`Element index:${index} Element value: ${name} Array: ${arr}`)
// });



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




