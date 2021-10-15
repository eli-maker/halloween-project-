/* let dice1 = Math.floor(Math.random() *6) + 1 ;  
let dice2 = Math.floor(Math.random() *6) + 1 ;
let dice3 = Math.floor(Math.random() *6) + 1 ;
let dice4 = Math.floor(Math.random() *6) + 1 ;
let dice5 = Math.floor(Math.random() *6) + 1 ;
let dice6 = Math.floor(Math.random() *6) + 1 ; */


 




  /* function singSong () {
    console.log ('DO');
    console.log ('RE');
    console.log ('MI');
}




 
 function greet (firstName, lastName) {
     console.log(`hey there, ${firstName} ${lastName [0] }.`)
 }


 function repeat(str, numTimes){
     let result = '';
     for (let i = 0; i< numTimes;i++) {
         result+= str;
     }
     console.log(result);
 }



 function add (x, y) {
     console.log (x + y); 
 }

 */

/* function greet() {
    console.log('HI!')
} */

/* 
function greet (firstName) {
    console.log(`firstName is: ${firstName}`)
    //console.log('HI!')
} */

/* function greet (firstName, lastName){
    console.log(`Hey there ${firstName} ${lastName[0]}.`)
} */

 /* function repeat (str, numTimes) {
    let result = '';
    for (let i = 0; i< numTimes; i++){
        result = result + str;
    }
    console.log(result);
} 
 
  */


 /*  function repeat (str, numTimes) {
     for (let i = 0; i < numTimes; i++ ) {
        console.log('hi')
     }
    }  */



    //LEVELING UP OUR FUNCTIONS


    //FUNCTION SCOPE 

/* function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
} */

// in the console I run it collectEggs () and I get 6 . Ejemplo completo en pc 




/* let bird = ' scarlet macaw';
function birdWatch(){
    //let bird = 'Great Blue Heron';
    console.log(bird);
}


birdWatch()  */


// BLOCK SCOPE 

/* let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}

console.log(radius);
console.log(msg); 
 */

 

/*  let bird= 'mandarin duck';

 function birdWatch(){
    
     let bird = 'golden pheasant';
     bird; // 'golden pheasant' 

 }

 bird; // 'mandarin duck' */




 /* let radius = 8;

 if(radius > 0) {

    const PI = 3.14;

    let circ = 2 * PI * radius;

 }

 console.log(radius); //8
 console.log(PI)//NOT DEFINED
 console.log(circ);//NOT DEFINED  */  


 // FUNCTIONS EXPRESIONS 

 /* const square = function (num) {
     return num * num;
 }

 square (7); //49 */


 //lexical scope 

 /* function bankRobbery (){
     const heroes = ['spiderman', 'iroman','wonderwoman']
     function cryForHelp(){
         for (let hero of heroes){
             console.log(`PLEASE HELP US ${hero.toUpperCase}`)
         }
     }- 
 }
  */

  // HIGHER ORDER FUCNTIONS

 /*  function callTwice(func){
  func();
  func();
  }  

  function laugh() { 
      console.log('HAHAHA');
  }

  callTwice(laugh) */  // pass an function as an arg!
  //'HAHAHA'
  //'HAHAHA'

// another example

  /* function callTwice(func){
    func();
    func();
    }  

 
    function callTenTimes(f){
        for (let i = 0; i< 10; i++) {
            f ()
        }
    }


    function rollDie(){
        const roll= Math.floor(Math.random() * 6) + 1
        console.log(roll)
    }


    callTwice('rollDie') */
    //5
    //6


    //RETURNING FUNCTIONS ejemplo 1 

/* function makeMysteryFunc(){
    const rand= Math.random();
    if (rand > 0.5){
        return function() {
            console.log('CONGRATS, I AM A GOOD FUNCTION!')
            console.log('YOU WIN A MILLION DOLLARS!!')
        }
    } else {
        return function () {
            alert ('computer  virys')
            alert('stop trying to close this window!!')
        }
    }
} */

// returning functions ejemplo 2 

 /* makeBetweenFunc (50,100) */



 /* function isBetween (num) {
     return num >= 50 && num <= 100
 }  */
 

// a factory fucntion 


/* function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
} */

// METHODS We can also use a function as the value in a property, in an object   



/* const math = {
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        x / y;
    },
    square : function (x){
        x * x;
    }
}; */


/* const myMath = {
    PI: 3.14159,
    square: function(num){{}
        return num*num;
    },
    cube: function (num){
        return num ** 3;
    }
} */



// This Keyword

/* const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWWWW`);
    }

} */

//Try/Catch 



try {
    hello.toUpperCase();

} catch {
    console.log ('ERROR!!')
}

console.log ('AFTER!')