// 1 Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

// 2 Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

// 3  Get the day, month and year of the current date and output it to the console separately






// 1 Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'



const letter1 = 'ahb acb aeb aeeb adcb axeb';


console.log(letter1.match(/a.b/g));



// 2 Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest



const integers = '2 + 3 223 2223';

console.log(integers.match(/2.\+.3/g));
//or
console.log(integers.match(/..\+../g));



// 3  Get the day, month and year of the current date and output it to the console separately



const timing = '18/09/2022'


//Date Format dd-MM-YYYY using separators - or . or /

console.log(timing.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
));
