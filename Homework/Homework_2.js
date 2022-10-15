// -     Create a car object, add a color property to it with the value equals 'black'

// -   Change the color property of the car object to 'green'

//-   Add the power property to the car object, which is a function and displays the engine power to the console

// -        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

// -       Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

// -        Write a function for calculating the type of argument and type output to the console

// -        Write a function that determines whether a number is prime or not





//####################################################################################

// // 1 - Create a car object, add a color property to it with the value equals 'black'

// -  Change the color property of the car object to 'green'

// -  Add the power property to the car object, which is a function and displays the engine power to the console : 



const Car = {
      car : 'Porsche',
      color : "Black",
      HorsePower() {
        let Power = 562;
        this.HorsePower = Power;
        
      }
}

Car.color = 'green';

Car.HorsePower();

console.log(Car);



// 2 - Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples




function Warehouse() {
    let apples = 0;
    let pears = 0;

    return function () {
        console.log("In Warehouse, We accepted " + apples + " apples " + "and " + pears + " pears " )
        return apples++ , pears++;

    }

}

const Count = Warehouse();
console.log(Count());
console.log(Count());
console.log(Count());
console.log(Count());



// 3 - Your name is saved in the payment terminal, write a function to define the name in the terminal 
//(if you entered your name, then hello + name, if not, then there is no such name)




function Terminal(name) {

    (name != "Nika" ) ? console.log("sorry, there no such name(("): console.log("Hello " + name );
    
}

Terminal("Nika")



// 4 -  Write a function for calculating the type of argument and type output to the console



function Calculator(output) {
    console.log(output + " is a " + typeof(output))

}

Calculator(false);



// 5 -  Write a function that determines whether a number is prime or not



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

console.log(test_prime())













