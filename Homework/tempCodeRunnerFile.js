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
