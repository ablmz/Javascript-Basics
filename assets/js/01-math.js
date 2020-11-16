/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log('Hallo', six, three);



var add = three+six;// add six to three
var subs = six-three;// subtract six from three


var multiply =three*six;// multiply three times six

let divide = six/three;// divide three by six

let modulo=six%three;// modulo six by three

// log results
console.log(add);
console.log(multiply);
console.log(divide);
console.log(modulo);

// build a function, that:
function myfunction(p1,p2){// takes two parameters
    if (isNaN(p1) || isNaN(p2)){
        console.log("ERROR:The Values are not Numbers");   // The function returns the product of p1 and p2
 
    } else {
        console.log("The Values are Numbers");// checks if both parameters are numbers, else returns error message in the console
        
        let ergebnis=p1/p2;// divides the first one by the second one
        ergebnis=ergebnis+3;// adds three to the result of the division
        ergebnis=ergebnis*p2;// multiplies the result by the second parameter
        
        if (ergebnis==21){
            ergebnis=ergebnis-4;// when the result is equal to 21, subtract 4
        } else{
            ergebnis=ergebnis+4; // else add 4
        
        }
        return ergebnis;// and then returns the result
    } 
    
    
} 

console.log(myfunction(4 ,2));




//function myFunction(p1, p2) {

 
// log the result of the function