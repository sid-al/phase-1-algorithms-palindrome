function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reversed(word);
  if(word === reverseWord){
    return true
  }else{
    return false
  }
}

function reversed(word){
  const WordArray = word.split(" ")
  const reversedArrayWord = WordArray.reverse()
  const reversedWord = reversedArrayWord.join("") 
  return reversedWord;

}

/* 
  Add your pseudocode here
  step 1;
  create a function to reverse a string{
    takes in a string an argument
    turn string to array using split()
    turn the array into reverse using reverse()
    turn the revesered Array back to word string using join()
    return the revesred word.
  }

  step 2;
  create 2 function named isPalindrome{
    that takes one argument
    turn the string argument to a reversed word using the reveserd function define upper
    create if statement{
      condition is ( argument passed in isPalindrome is strictly equals to reversedString function and its argument beign the isPlindrome argument)
      if they are equal return {
        provided string argument that is reversed is a palindrome
      if not return the string argument is not palindrome

      }
    }

  }
*/

/*
  Add written explanation of your solution here

  i have created a function to reve
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here 
  "madam" === "madam"; //=> true
  "cone"  === "enoc"; //=> false

  //
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
