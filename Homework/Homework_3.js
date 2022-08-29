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




