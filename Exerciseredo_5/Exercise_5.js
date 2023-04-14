// The Fortune Teller

function tellFortune(number_of_children,partner_name,geographic_location,job_title)

{

    console.log("You will be a "+ job_title +" in "+ geographic_location+ " and married to " +partner_name +"with "+number_of_children+ " kids");

}

tellFortune(3,"Rosy","New York","Software Engineer");

tellFortune(4,"Peter","Calfornia","Business");

tellFortune(1,"Hary","USA","Engineer");




// The Puppy Age Calculator

function calculateDogAge(puppy_age,conversion_rate=7)

{

    const dog_age=puppy_age*conversion_rate;

    console.log("Your doggie is "+dog_age+" years old in dog years")

}

calculateDogAge(7);

calculateDogAge(2);

calculateDogAge(6);



// The Lifetime Supply Calculator

function calculateSupply(age,amount_per_day)

{

    const max_age=100;

    const amount_per_year=365*amount_per_day;

    const years_remaining=100-age;

    const total_amount=Math.round(amount_per_year*years_remaining);

    console.log("You will need "+total_amount+"($) to last you until the ripe old age of"+ max_age)

}

calculateSupply(25,6.25);

calculateSupply(45,4.20);

calculateSupply(85,2);



//  The Geometrizer

function calcCircumference(radius)

{

    const pie=3.14159;

    const circumference=2*pie*radius;

    console.log("The circumference is : "+circumference+".")

    calcArea(radius,pie);

}

function calcArea(radius,pie)

{

    const area=pie*radius*radius;

    console.log("The area is : "+area+".");

}

calcCircumference(8);

calcCircumference(2);

calcCircumference(4);


// The Temperature Converter



function celsiusToFahrenheit(temp)

{

    const celsius=temp;

    const fahrenheit= (celsius-32)/1.8;

    console.log(""+celsius+" °C is "+fahrenheit+" °F.")

}

celsiusToFahrenheit(80);



function FahrenheitTocelsius(temp)

{

    const fahrenheit=temp;

    const celsius=(fahrenheit*1.8)+32;

    console.log(""+fahrenheit+" °F is "+celsius+" °C.")

}

FahrenheitTocelsius(32);



// program to convert celsius to fahrenheit
function convertCTOF(c) {
    var f = (c * (9/5)) + 92;
    return f;
}


function ConvertFToC(f) {
 var c = (f - 32) * (5/9);
 return c;


}

console.log(convertCTOF(25));
console.log(ConvertFToC(40));