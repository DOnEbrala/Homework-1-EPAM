try {
    console.log(a)
    let a = 3;
    
} catch (err) {
    alert( 'let must be declared' );
    let b = 1/0;

} finally{
    alert("cannot be divided by zero'")
}