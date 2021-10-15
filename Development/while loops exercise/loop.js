// PRINT ALL NUMBERS BETWEEN -10 AND 19 

console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");

    var num = -10 ;
    while ( num <=19){
    console.log (num);
     num++;
    }

// PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40 
console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");

    var num = 10 ;
    while (num <= 40) {
        console.log (num);
        num += 2;
    }

// PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333 MY WAY
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333 MY WAY");

    var num = 301;
    while (num <= 333) {
        console.log(num);
        num += 2;
    }

    
    
    // PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333 COLT'S WAY
    console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333 COLT'S ");

    var num = 300;

    while (num <= 333) {
        if ( num % 2 !==0) {
            console.log(num);
    }
    num+=1;    
    }

    
    // PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50 
    console.log(" PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50 ");

    var num = 5;
    while (num <= 50) {
        if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
        }
        num += 1;
    } 


     