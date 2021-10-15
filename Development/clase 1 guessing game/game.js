// create secretNumber

var secretNumber = 4;

// ask user for guess

var stringGuess = prompt ("guess a number");
var guess = Number (stringGuess); //para cambiar la string que de a numero 

//check if guess is righ


if(guess === secretNumber) {
    alert ("YOU GOT IT RIGHT");
}



// check if guess is higher 

else if ( guess > secretNumber) {
    alert ("too hight, guess again!");
}


else  {
    alert ("too low, guess again!");
}



    