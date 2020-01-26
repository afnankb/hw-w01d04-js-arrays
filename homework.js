//Create a function that will get the sum of the numbers between 1 and n and return the answer 
 // should return 15 because 1+2+3+4+5=15


 let total = 0;
 const summation = function (thenumber){
 
  for(var i = 1; i <= thenumber; i++){
       total += i;
     }
     return total;
 
 
 }
 
 summation(4);
 console.log(total);
 
 

 //Create a program to get the sum of all the even numbers in a group 
 // should return 6 because 2+4=6

let total = 0;
const summationEven = function (thenumber){

 for(var i = 1; i <= thenumber; i+=2){

       
      total += i;
      
      
    }
    return total;


}

summationEven(5);
console.log(total);



//Create a function to get the average of a group of numbers 
// should return 4


let total = 0;
let averge = 0;
const averageOfNumber = function (thenumbers){

 for(var i = 0; i < thenumbers.length; i++){

       let length=thenumbers.length;
      total+= thenumbers[i];
      
    }
     
     let length=thenumbers.length;
     averge= total/length;
    return " The sum of numbers is "+total+" And the avrege is "+averge;

   
}
console.log(AverageOfNumber([8,2,2,4]));




//Create a function to reverse the letters in a word
const reversec= function(Name){

    return Name.split('').reverse().join('');
    
    }
    
    
    console.log(reversec("caterpillar"));
    
    
    

    
//Create a function that takes an array of words and combines them with a dash 
// should return "test1-test2-test3"
const addDashes= function(array){

    return array.join("-");
    
    }
    
    console.log(addDashes(['test1', 'test2', 'test3']));
    
    
    
//Function that will count up to a number and back down and return a string of the climb 
// should return "1 2 3 2 1"    


const countUpAndDown= function(number){

    const listOfNumber = [];
    for (var i=0 ; i<number ; i++){
    
    listOfNumber[i]= listOfNumber.push(i+1);
    console.log(listOfNumber[i]);
    
    }
    if (listOfNumber.length===number){
    
    for(var g=i-1 ; g>=0 ; g--){
    listOfNumber[i++]= listOfNumber.push(g);
    console.log(listOfNumber[g]);
    }
    
    
    }
    return listOfNumber.join()
    
    }
    
    console.log(countUpAndDown(3));
    
    
    
//Write a function that will tell you all of the words in an array that contain the letter `a` 
 // should return ['cat', 'rabbit']    

 const wordsWithLetter = function(letter, words){
  const str = [];
  for(let i = 0; i < words.length; i ++){
      if ( words[i].includes(letter)){
          str.push(words[i]);
      }
  }
  return str;
}

console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));




}





}



//Write a function that will tell you all of the words in an array that contain a specified letter 
 // should return ['dog', 'frog']


 const wordsWithLetter = function(letter, words){
  const str = [];
  for(let i = 0; i < words.length; i ++){
      if ( words[i].includes(letter)){
          str.push(words[i]);
      }
  }
  return str;
}

console.log(wordsWithLetter("g",['cat', 'rabbit', 'dog', 'frog']));








//Function that returns the longest word in sentence 

const longestWord = function(sentence){
  const words = sentence.split(' ');
  let longest = words[0];
  for (let i = 0; i < words.length; i++){
      if ( words[i].length > longest.length ){
          longest = words[i];
      }
  }
  return longest;
}
console.log(longestWord('The cat in the house'));




//Function that returns the largest even number 

const largestEvenNumber =  function (number)
{
  let large = [];
  for(var i = 0; i < number.length; i++){
          if (number[i] % 2 === 0 ){

              large.push(number[i]);

          }
           
  }
  const largestEvenNumber = function(nums){
    let largest = nums[0];
    for(let i = 0; i < nums.length; i++){
        if ( !(nums[i] % 2 )&& nums[i] > largest ){
            largest = nums[i];
        }
    }
    return largest
}





console.log(largestEvenNumber([1,2,3,10,4,7,0]));