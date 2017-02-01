//This is my JS File

//alert("We are testing if its linked");

//1.Variables and data Types

//Number
//String
//boolean
//Array
//Object


//var pass= true;


/*var cityName= "London";
//string
var busNumber= 16;
//number

var shoppingList = ["Milk", "Sugar", 2, true];
//array

var living ={
    cityName:"London",
    country:"UK" // Object
}*/

/*
var firstNumber = 25;
var secondNumber = "15";

console.log(firstNumber+ 2 + secondNumber);
*/

//Naming conventions:

/*var myCar;
//camel case

var MyCar;
//partial

var my_Car
//underscore*/



//2.Arrays

var jsF = []; //Array literal- Should use this one!
var jsF = new Array(); //Array constructor

//JavaScript arrays are number indexed based starting from zero

//JavaScript objects are name indexed based
//var jsF =["jQuery", "nodeJs", "reactJS"];

//jsF[0] ="Java";

//jsF.pop();


//console.log(jsF[0]);
//alert(jsF);

//3.Loops- for, while and foreach loops

/*for (var i=0; i< 10; i++)
{
    console.log(i);
}*/

/*var i= 0;
while (i <= 10){
    console.log(i);
    i++;
}*/


//Do while loop

/*
var i=0;
do {
    console.log(i)
    i++;
    
} while(i<=10);
*/





/*
var myNumbers =[23, 75, 2, 9];
myNumbers.reverse();

for (var i =0; i<myNumbers.length; i++)
    {
        console.log(myNumbers[i]);

    }

*/

// 9. Conditions
/*
if (6 == "6"){
    
    console.log("This is true");
} else {
    console.log("This is false");
}*/


//switch condition

/*
var car = "Suzuki";

switch(car) {
        
    case "Mercedes":
        alert("I hate this car");
    break;
        
    case "Ferrari":
        alert("I love this car");
    break;
        
    default:
        alert("None of the above");
    break;
        
    
        
        
}
*/

// 10. Functions

//Javascript function is a block of code designed to perform a 
//particular task.

/*var height= 5;
var width = 9;
var total;

function area() {
    total = height * width ;
    
    //console.log(total);
    return total;
}



area();
console.log(total);
//alert("OK I am here now");*/


//Anonymous functions are the ones without a name- don't need to invoke.

/*

window.onload = function (){
    alert("I have arrived");
}
*/

//to set a timer before alert appears
/*
setTimeout(function() {
    alert("i am waiting");
}, 1000);
*/


//Assigning a function to a variable means function now has a name- needs to be invoked
/*
var height= 5;
var width = 9;
var total;

var myArea = (function(){
    total = height * width ;
    
    console.log(total);
    //return total;
})();*/

//console.log(myArea());


//Parameters and arguments

/*
function calculateVolume (height, width, length) 
{
    return height * width * length;
}

var livingRoom = calculateVolume(3, 7, 6);
var kitchen = calculateVolume(1, 2, 3);
var bathroom= calculateVolume(1, 2, 10);

console.log(livingRoom);

console.log(kitchen);
console.log(bathroom);
*/

//11.Objects- An object is a unordered collection of key value pairs.

//Not a very good practice

var student = new Object();

//Properties of object:
/*student.firstName = "Veeran";
student.lastName = "Shergill";

//console.log(student.firstName);

var ages = new Array(23);
console.log(ages);*/


//Good practice:
var student = {
    
    firstName: "Veeran",
    lastName: "Shergill",
    getFullName: function()
    {
       return this.firstName + " " + this.lastName;    
    },
    
    address: {
        doorNumber: 42,
        streetName:"Shelley Avenue",
        postCode: "E12 6SW"
    
}
    
    
};

//var ages = [45];

console.log(student.address.doorNumber);






































































































































