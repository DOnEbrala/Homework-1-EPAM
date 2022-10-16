const arrayOfMovies = ["TopGun", "Cars", "Sao", "Titanic"];

arrayOfMovies.forEach((name) => console.log(name));

// 2

const arrayOfCars = ["Ferrari", "Mitsubishi", "Mercedes", "Ford"];

const arrayOfCarManufacturers = arrayOfCars.map((Currentcars) =>
  Currentcars.toString()
);

console.log(arrayOfCarManufacturers);

// 3

let arrayOfMyfriends = ["Giorgi", "Salome", "Saba", "Grisanti"];

arrayOfMyfriends.forEach((name) => {
  return console.log(`Hello: ${name}`);
});

// 4

const arrayOfNumbers = new Array(3);

for (let i = 0; i < arrayOfNumbers.length; i++) {
  arrayOfNumbers[i] = false;
}

console.log(arrayOfNumbers);

// 5

let arrayDescend = [1, 6, 7, 8, 3, 4, 5, 6];
arrayDescend = arrayDescend.sort(function (a, b) {
  return b - a;
});

console.log(arrayDescend);

// 6

const arrayOfThree = [1, 6, 7, 8, 3, 4, 5, 6];

arrayOfInt = arrayOfThree.filter((index) => index > 3);

console.log(arrayOfInt);

// 7
function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([4, 1, 6], 3));

// 8

for (let rep = 1; rep < 10; rep++) {
  console.log(`a : ${rep}`);
}

// 9

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(10));

// 10

function ODD_numbers(maxnumber) {
  for (var i = 1; i < maxnumber; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
ODD_numbers(15);
