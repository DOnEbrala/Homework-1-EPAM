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
