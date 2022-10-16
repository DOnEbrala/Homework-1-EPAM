const Car = {
  car: "Porsche",
  color: "Black",
  HorsePower() {
    let Power = 562;
    this.HorsePower = Power;
  },
};

Car.color = "green";

Car.HorsePower();

console.log(Car);

// 2

function Warehouse() {
  let apples = 0;
  let pears = 0;

  return function () {
    console.log(
      "In Warehouse, We accepted " +
        apples +
        " apples " +
        "and " +
        pears +
        " pears "
    );
    return apples++, pears++;
  };
}

const Count = Warehouse();
console.log(Count());
console.log(Count());
console.log(Count());
console.log(Count());

// 3

function Terminal(name) {
  name != "Nika"
    ? console.log("sorry, there no such name((")
    : console.log("Hello " + name);
}

Terminal("Nika");

// 4

function Calculator(output) {
  console.log(output + " is a " + typeof output);
}

Calculator(false);

// 5

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

console.log(test_prime());
