for(let number=2; number<=12; number++){
  let isODD = false;

for (let i=2; i<= number-1;i++){
  if(number%i=== 0){
      isODD = true;
      break
  }
}
if (isODD) console.log(number);
}

