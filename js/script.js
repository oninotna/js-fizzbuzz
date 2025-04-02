// * RACCOLTA DATI
const multipleOfThree = "Fizz";
const multipleOfFive = "Buzz";
const multipleOfThreeAndFive = "FizzBuzz";


// * SVOLGIMENTO 1
// for (i=1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(multipleOfThreeAndFive);    
//     }
//     else if (i % 3 === 0) {
//         console.log(multipleOfThree);    
//     }
//     else if (i % 5 === 0) {
//         console.log(multipleOfFive);    
//     }
//     else {
//       console.log(i);  
//     }   
// }

// * SVOLGIMENTO 2
// for (i=1; i <= 100; i++) {
//  const replaceNumber = i % 3 === 0 && i % 5 === 0 ? multipleOfThreeAndFive
//     : i % 3 === 0 ? multipleOfThree
//     : i % 5 === 0 ? multipleOfFive: i;
//     console.log(replaceNumber); 
// }


// * SVOLGIMENTO 3
for (i=1; i <= 100; i++)
    console.log((i % 3 ? '' : multipleOfThree) + (i % 5 ? '' : multipleOfFive) || i);
    