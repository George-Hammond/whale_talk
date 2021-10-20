//initialize a variable and assign it a string
let input = 'elouisa utilises utter merits';

//initialize a variable and assign it to an array containg vowel as elements.
const vowels = ['a','e','i','o','u'];

//initialise a variable and assign it to an array with empty elements
let resultArray = [];

//a loop to iterate through each letter in the input variable

for (let i= 0; i< input.length; i++){
//console.log(/*input[i]*/ +i);
  for(let j = 0; j<vowels.length; j++){
// console.log(/*vowels[j]*/'j is ' + j);

//compare inout letters in the vowel array
    if (input[i] === vowels[j]){

//push e's and u's to resultArray and double the letter u
      if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
      }
      if (input[i] === 'u'){
        resultArray.push(input[i]);
      }
    }
  }
}
//Prints resultArray.
//console.log(resultArray);
//concatinate all element of resultArray with a method and make them uppercases.
console.log(resultArray.join('').toUpperCase());

