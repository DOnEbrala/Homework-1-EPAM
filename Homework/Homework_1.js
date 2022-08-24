// 1 - Perform addition of various types (string + boolean, string + number, number + boolean)



// A - String + Boolean


     let fname = "Nika"; 
     let Lname = true;

        const x = fname + " " +  Lname;
        console.log(x);



// B - String + Number ########################################################


     let numb = 5;
     let str = "6"

        const answer = numb + str; 
        console.log(answer);



//another B :


     let born = "2000";
     let today = 2022;

        const age = today - born;
        console.log(age);     



// C - Number + Boolean  ########################################################


     let G = 25;
     let Y = true;

        const U = G + Y;
        console.log(U);  
          
    




//2 - Perform multiplication of various types (string * boolean, string * number, number * boolean)



// A - string * boolean 


        let a = "10";
        let b = false;
        
            const y = a * b;
            console.log(y);



// B - string * number ########################################################


        let Lobiani = 5;
        let Khachapuri = "10"; 

            const Supra = Lobiani * Khachapuri;
            (Supra === 50) ? console.log("true") : console.log("false")            


//Another B :


        let Apple = "two";
        let Banana = 11;
           
           const Basket = Apple * Banana;//console.log(Basket);
           (Basket === 22 ) ? console.log('true'): console.log("false");




// C - number * boolean ########################################################


        let Razer = true;
        let Hyperx = 33;

           const R = Razer * Hyperx ; 
           console.log(R);



// 3 - Divide different types (string / boolean, string / number, number / Boolean)



// A - string / boolean 


        let Khinkali = "meat";
        let Pelmeni = false;

            const food = Khinkali / Pelmeni ;
            console.log(food);



//Another A :


        let Keyboard = "10"
        let Mice = true;

            const peripherals = Keyboard / Mice;
            console.log(peripherals);
            


// B - string / number ########################################################


        let LG = "Washmachine";
        let Bosh = 55;

            const Tehc = LG / Bosh;
            console.log(Tehc);



//Another B : 


        let Joystick = "23";
        let Wheel = 32;

            const game = Joystick / Wheel;
            console.log(game);



// C - number / Boolean ########################################################


        let MasterChief = 117;
        let Cortana = false;

            const Halo = MasterChief / Cortana;
            console.log(Halo);



// 4 - Perform explicit conversion (number, string, boolean)


//number && string


        const inputYear = '1991';

            console.log(Number(inputYear) + 18);


// Another number && string - 1


        const Key = 20;

              console.log(String(Key) - "10");

              //or
              
              console.log(String(Key) + 10);



// Another number && string - 2
               

        const myName = "Nika"

              console.log(Number("myName"));



//number && boolean  ########################################################


              console.log(Boolean(25));

              console.log(Boolean(0));



//another number && boolean 


              console.log(Number(true));

              console.log(Number(false));
 
   



//string && boolean ########################################################
        
              
             console.log(Boolean("Converted Boolean"));
        //or
             console.log(Boolean(" "));
        //or
             console.log(String(false));
        //or
             console.log(String(true));
        //or

             const me = true;
             const you = Boolean("man")
                   console.log(me + you);


//number && string && boolean ; 


         const Luka = String(25)
         const Liza = Number("23")
         const Archil = Boolean(20)

               console.log(Luka - Liza / Archil);

