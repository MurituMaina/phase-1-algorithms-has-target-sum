function hasTargetSum(array, target) {
  // Write your algorithm here
  // console.log(array.length,target)
  // add the values
// iterate over the values
// check if the the difference of the target from the 
// current value index
// check if the array has a value that is equal to the difference
// return true if present
// else return false for absent
/* */
for (let i = 0; i < array.length; i++) {
  let differenceFromTarget = target - array[i];
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] === differenceFromTarget){
      return true;
    }
  }
}

return false
}

   

// /* Rewrite the problem
// $ function that receive 2 values, 
// $ Check values and select two values
// $ add 2 values in the array and repeat the step above
// $ check if any is equal to the target value
// $ return true if any pair add upto a target number
// $ 

// */

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode heret
//   $ check the values of the array
//   $ pick any two and add the two
//   $ check if any of the sums equal the target number
//   $ if present return true
//   $ repeat 
//   $ else return false
  


// */

// /*
//   Add written explanation of your solution here
/* $ read the value of a digit 
   $ get the difference from the target
   $ check for the value of the difference from the remaining 
   values by incrementing the value of the index
   $ if present return true;
*/
// */

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
}

module.exports = hasTargetSum;
// hasTargetSum([2,4,6],10)
// // // hasTargetSum([3, 8, 12, 4, 11, 7], 10)