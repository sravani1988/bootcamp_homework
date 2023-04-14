
function circleValues(radius)

{

    const pie=3.14159;

    const circumference=2*pie*radius;

    const area=pie*radius*radius;

    return{Perimetre:circumference,area:area};

}

const x=circleValues(5);

console.log("Circumference of the circle is : "+x.Perimetre);

console.log("Area of the circle is : "+x.area);











//
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


function reverse_a_number(n)
{

    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(22453));


// count no.of vowels in a string
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox")); 

    

//Flatten array of arrays using JavaScript reduce

let a = [
    [1,2],
    [
      [3,4]
    ],
    [
      [[5],[6]]
    ]
  ];
  
  const flatten = arr => arr.reduce((a, v) => {
    if (v instanceof Array) {
      return a.concat(flatten(v))
    } else {
      a.push(v);
      return a;
    }
  }, [])
  
console.log(flatten(a));

 // In JavaScript, to get a random number between 0 and 1


 
 function randomwholenum(_) {

    return Math.random();
 }
console.log(randomwholenum());

 
// random integer between 0 and 9



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

console.log(getRandomInt(0,10));




//simple interest 

function simpleInt(principal, rate, time) {

  // Calculate the simple interest

  const interest = (principal * rate * time) / 100;

  // Calculate the final amount

  const finalAmount = principal + interest;

  // Return the final amount

  return finalAmount;

}

const principal = 1000;

const rate = 5; 

const time = 2; 

console.log(simpleInt(principal, rate, time));


// compound Intrest

function compoundInt(principalc, ratec, timec, nc) {

  let amount = principalc * Math.pow(1 + (ratec/nc), nc*timec);

  amount = amount.toFixed(2);

  return amount;

}

const principalc = 1000;

const ratec = 5; 

const timec = 2; 

console.log(compoundInt(principalc, ratec, timec, 12)); 






    

 // add unlimited numbers 
 function sum(...args) {
     return args.reduce((total, current) => total + current);
 }
 
 console.log(sum(1,2,3));
 //Result:
 //6
 
 console.log(sum(10,5));
 //Result:
 //15
 
 console.log(sum(10,10,10,10,10));
 //Result:
 //50




 function addNumber(...numbers) {

    let sum = 0;
    for (let i =0; I < numbers.length; i++) 
        {
        if (typeof numbers[i] === 'number') 
        {sum += numbers[i];


        }
    }
   return sum;

   console.log(addNumber(12,3,4,5));


 }


// to add numbers

function addNumbers(...args) {

  return args.reduce((sum, num) => sum + num, 0);

}



console.log(addNumbers(1, 2, 3)); 

console.log(addNumbers(4, 5, 6, 7, 8)); 

console.log(addNumbers(10)); 

console.log(addNumbers());



// unlimited arrays

function addArrays(...arrays) {

  return arrays.reduce((result, arr) => result.concat(arr), []);

}



const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [7, 8, 9];



const combinedArray = addArrays(arr1, arr2, arr3);

console.log(combinedArray);










 //factorial of a number
 function fact(n) {
    if (n > 1) {
      return n * fact(n-1);
    } else {
      return 1;
    }
  }
  console.log(fact(5));





//factorial of a number

function factorial(num) {
let result = 1;
while (num > 1) {
    result *=num
    num-= 1;

}
return num;
}
console.log(factorial(5));




//Write a function to check if an input string is a palindrome

function Palindrome(str) 
{
r = str.split(").reverse().join(");
if (str == r)
    { 
    return true;
    }
else{

    return false;
    }
}
str = "madam";
a = Palindrome(str);
console.log(a);




function palindrome(str) {
    // Good luck!
    return true;
  }
  str = "eye";
  a = Palindrome(str);
  console.log(a);

  




//write a function to find count of letter in string
function lettercount(str) 
    {
    let count = 0;
     for (let i =0; i < str.length; i++)
      if (str[i].match(/[a-zA-Z]/)) 
            {

               count++;

             }
    return count;
            }

    console.log(lettercount("hello world"));

      

// prime or not 

function checkPrime(num) {

  // If the number is less than 2, it's not prime

  if (num < 2) {

    return false;

  }

  

  // Loop from 2 to the square root of the number

  for (let i = 2; i <= Math.sqrt(num); i++) {

    // If the number is divisible by any number between 2 and the square root of the number, it's not prime

    if (num % i === 0) {

      return false;

    }

  }

  

  // If the number is not divisible by any number between 2 and the square root of the number, it's prime

  return true;

}

console.log(checkPrime(5));

console.log(checkPrime(10));




















