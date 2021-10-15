let maximum = parseInt(prompt (' Enter the maximum number!')); // pedirle al usuario que ingrese el max number 
while (!maximum) {
    maximum = parseInt (prompt ('Enter a valid number!'));                                                   
}

// lo que recibo de un prompt, el lo recibe como si fuera una string. Usamos parseInt, para convertir la string en numero, tambien se puede usar Number 

const targetNum = Math.floor(Math.random() * maximum) + 1; 
console.log(targetNum)

// usmamos math.random para que nos de un numero, y usamos math.floor para que el numero deje de ser decimal. 


let guess = parseInt (prompt ('Enter your first guess!')) ;
let attempts = 1;




while (parseInt(guess) !== targetNum) {
    if( guess !== 'q') break;
    attempts++;
    if(guess < targetNum) {
      guess = (prompt ('Too high! enter a new guess:')) ;
    } else {
         guess = ( prompt ('Too low! enter a new guess:'));
    }
        
}
                                                                                                                                      
if (guess === 'q') {
    console.log ('OK, YOU QUIT!')
}  else {
      console.log('CONGRATS YOU WIN!') 
      console.log  (`You got it! It took you ${attempts} guesses`)
}



