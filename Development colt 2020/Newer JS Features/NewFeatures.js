 // Default Params
 
 /* function rollDie(numSides) {
     return Math.floor(Math.random() * numSides) + 1;
 } */

 // si en consola el paramentro que meto es 6, we should get a number between 1 to 6 

 // lets say that I want to allow a user to just default numSides if they dont pass it in, I want it to be six, thats the most commonly size
 // si trato eso ahora, y no paso paramentro en consola, rollDie() we get NaN and it makes sense because is undefined

 // so in the past before this syntax improvement, im about to show yo, this is what we would do, we would check to see if a value if a parameter was undefined 
// so you do something like this

/* function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6  
    }
     return Math.floor(Math.random() * numSides) + 1;
 } */

 // en consola, you dont pass in a number it defaults to six 

 // so this is the old way of doing things and its kind of annoying , its not ideal, specilly if you have more than one parameter, thats optional 

 
 // now the new way of doing it is using the syntx improvement where we add an equal singn and a default value directly in our parameter list
 
 // in this example, A has no default value, A will be whatever you pass in as the first argumetn. B does have a default value, if you leave it off, it will default to one


 /* function multiply(a, b = 1) {
     return a * b;
 }
 */
 //multiply(4); // 4
//multiply(4, 5); // 20   


// so we can rewrite this function rollDie. numSides = 6 and thats it. This is easier to read and write

/* function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
 } */

 // so we can write multiple default params but one thing you need to watch out for is the order the order matters 
 // un parameter default tiene que ir despues de un parameter que no este default 


 //Spread for function calls 


 // expands an iterable (array, string, etc) into a list of arguments

 /* const nums = [ 9, 3, 2, 8];
 
  Math.max(nums);  */ // NaN
 // Use spread!!

 /* Math.max(...nums); */ // 9
 // Same as calling
 // Math.max(9,3,2,8)


 //Spread with array literals

/* const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs] */

// en consola 

/* allPets
(5) ["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]

[...dogs, ...cats]
(5) ["Rusty", "Wyatt", "Blue", "Scout", "Rocket"]
 */


// We have seen how we can copy pieces of an array using things like Slice, but we are not going to do that 
// because spread allow us to spread an iterable like an array like cats array into in this case a new array 


// we are spreading an array into another array, we are combining things 



// Spread with Objects 

// copies properties from one object into another object literal

/* const feline = {legs:4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'}
 */

// consola

/* const catDog = {...feline, ... canine}
undefined
catDog
{legs: 4, family: "Caninae", isFurry: true} */



// Rest Params 
//it lloks like spread because it also uses three dots, but it means something entirely different 
// collects all remaining arguments into an actually array 
// we need to go back and talk abput something called the argumets object 
// inside of every function we have written so far, we have access to this thing, created for us automatically called argumets
// and it kind of looks and acts like an array its what we called an array like object, we can use index to access elements out, in 
// that sense, it works exactly like an array, except we dont have access to array methods like push , pop, reduce and all that stuff
// so what does it contain? what does it do?
// it automatically will hold all of the argumets pass to our function 


// Destructuring Arrays

// a short, clean syntax to unpack or extracting or singling out values from arrays or from objects 
// values from arrays
// properties from objects into distinct variables 


const scores = [921959, 8966589, 888996, 772739, 543671, 243567, 111934];

const highScore = scores[0];  //and that singling out this value 9219590
const secondScore = scores[1];  // and this value 8966589 and that works jusr fine, but theres a much shorter way of doing this 
// and that shorter syntax looks like this, using destructuring 

const [] = scores; // and then in those brackers I can single out
// I want the firts value in this array to be called lets just go with gold and silver 




// consola
// gold       // so the first element was save to gold      
//921959


// and then silver is a new variable that was created with that second element 
// twengo varios valores en scores, y solo extract dos, lets say we wanted everybody else in a new array called everyoneElse



const [gold, silver, bronze, ...everyoneElse] = scores; 

// consola
//everybody
//(4) [772739, 543671, 243567, 111934]        // it contains everyone else who was not called out 




// Destructuring Objects 

const user = {
    email: 'colt@gmail.com',
    password: 'jkdekopr',
    FirstName: 'colt',
    lastName: 'milk',
    bio: 'american politician',
    city: 'ohio',
    
}

// we can destructur them using a similar syntax

const {} = user;    // inside of here we need to call out individual properties,  so the order doesnt matter like it does with an array 

// we are doing it by name 


const {email} = user;


// consola
// email
// 'colt@gmail.com'

const {email, FirstName, lastName, city} = user;  // and thats gonna make me five separate variables 





// Param Destructing 


const user = {
    email: 'colt@gmail.com',
    password: 'jkdekopr',
    FirstName: 'colt',
    lastName: 'milk',
    bio: 'american politician',
    city: 'ohio',
    
}


function fullName(user) {
    return `${user.FirstName} ${user.lastName}`
} 

// fullName(user)
//colt milk



// destructuring params

function fullName({FirstName, lastName}) {
    return `${FirstName} ${lastName}`
} ,



const banner = document.getElementById('banner')

document.getElementsByTagName('img')


document.querySelector('p') 
