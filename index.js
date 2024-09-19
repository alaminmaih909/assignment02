// Q - 01 = done

function calculateDifference(a, b) {
    return a - b;
}
let  result1 = calculateDifference(5,2);
console.log(result1);


// Q- 02 = Done
function isOdd(number) {
    return number % 2 !== 0;
}

let result2 = isOdd(2);
console.log(result2);


//Q- 03  = done

let numbers03 = [10, 5, 3, 9, 1, 8];

function findMin(array03){
       let minimum = array03[0];

       for(let i = 0; i < array03.length; i++){
                 if(array03[i]<minimum){
                    minimum = array03[i];
                 }
       }
       return minimum;
}
let minNumbers = findMin(numbers03);
console.log(minNumbers);



//Q- 04   = Done 

let numbers04 = [11, 24, 31, 43, 54, 16];

function filterEvenNumbers(arrays) {
   
    return arrays.filter(function(num) {
        return num % 2 == 0;
    });
}

let evenNumbers = filterEvenNumbers(numbers04);
console.log(evenNumbers); 


//Q- 05   = Done
let number05 = [5,18,20,11,33,29,12,41];

function sortArrayDescending(numbers) {
        let newArray= numbers.slice();
        let result = newArray.sort(function(a,b){
            return b-a;
        });

        return result;
}

let result05 = sortArrayDescending(number05);
console.log(result05);




//Q- 06  = Done
function lowercaseFirstLetter (){
    let name = "Alamin";
    let result = name.charAt(0).toLowerCase() + name.slice(1);
    return result;

 }

 let result06 = lowercaseFirstLetter();

 console.log(result06);



//Q- 07  = Done
function countVowels(string) {
   
    const vowels = "aeiouAEIOU";
    
    const array = string.split('');
    
    const vowelCount = array.filter(char => vowels.includes(char)).length;
  
    return vowelCount;
  }
  
  
let result07 = countVowels("Alamin is a Javascript developer");

console.log(result07);
  

//Q- 08 = Done

let numbers = [5,18,20,11,33,20,12,41];

function findAverage(array){
     if (array.length === 0){ return 0;} // if no index in array
     
     let sum = array.reduce((previousValue,currentValue) => previousValue + currentValue,0)

     let result = sum/array.length;

     return result;
}

let findAverageResult = findAverage(numbers);
console.log(findAverageResult);
