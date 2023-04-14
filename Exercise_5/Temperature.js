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