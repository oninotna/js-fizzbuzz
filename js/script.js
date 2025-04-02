// RACCOLTA DATI
const multipleOfThree = "Fizz";
const multipleOfFive = "Buzz";
const multipleOfThreeAndFive = "FizzBuzz";


// SVOLGIMENTO
for (i=1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(multipleOfThreeAndFive);    
    }
    else if (i % 3 === 0) {
        console.log(multipleOfThree);    
    }
    else if (i % 5 === 0) {
        console.log(multipleOfFive);    
    }
    else {
      console.log(i);  
    }   
}


