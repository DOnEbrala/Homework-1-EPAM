try {
    let b = 1/0;
    if (b == Infinity ){
        throw new Error("cannot divide by zero")
    }
    console.log(b);

} catch (err){

    console.log(err);

}