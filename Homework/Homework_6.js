//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'



//1
try {
    console.log(a)
    let a = 3;
    
} catch (err) {
    alert( 'let must be declared' );

}


//2

try {debugger
    let b = 1/0;
    if (b == Infinity ){
        throw new Error("cannot divide by zero")
    }
    console.log(b);

} catch (err){

    console.log(err);

}