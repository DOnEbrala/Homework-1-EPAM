function test_odd(o)
{

  if (o === 1)
  {
    return false;
  }
  else if(o === 2)
  {
    return true;
  }else
  {
    for (var x = 3; x < o; x++)
    {
      if(o % x === 0)
      {
        return false;
      }
    }
    return true;  
  }

}

console.log(test_odd(17))
