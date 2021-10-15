const subreddits = [ 'cringe', 'books', 'chickens', 'funny', 'pics', 'soccer','gunners', ] ;

for (let i = 0; i < subreddits.length ; i++) {
    console.log(` Visit reddit.com/r/ ${subreddits[i]} `) 
}

//  en la pagina visit reddit.com, luego si quiero poner cringe o bookd o chickens, i need to access {subreddits [i] }
// i need to access {subreddits}, square bracker i, [i] 


for (let subrredit of subreddits) {
    console.log(`visit reddit.com/r/${subrredit}`)
}


const seatingChart = [
    [ 'Kristen', 'Erik', 'Namita', ],
    [ 'Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    [ 'Yuma', 'Sakura', 'Jack', 'Erika'],
  ]

 
  for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    
    for (let j = 0; j < row.length; j++)
    console.log (row[j])
}






// opcion con For ...Of mas facil y clara 


for (let row of seatingChart) { 
    for (let student of row)
    console.log(student);
}
