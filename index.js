function hasTargetSum(array, target) {
  // Write your algorithm here
  // step 1
  const lengthOfArray = array.length;
  // step 2
  let sum = 0;
  // n times
  for (let i = 0; i < lengthOfArray; i++) {
    // n times
    for(let j = i + 1; j < lengthOfArray; j++) {
      sum = array[i] + array[j];

      if (sum === target)
        return true;
    }
  
  }
  //step3
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

// O(2n + 3) O(n^2)

/* 
  Add your pseudocode here
*/

// function hasTargetSum(array, target) {
//   get the array length
//   let the sum to be zero at first

//   itterate the array {
//     itterate the array + 1 {
//       sum up the value of 1st and 2nd itteration

//       return true if sum === target
//     }
//   }
//   return false if all the itteration was done and no sum matched to the target
// }

/*
  Add written explanation of your solution here
*/

// I will have 2 for loops so that the outside loop will only move
// to the inside loop is done itterating and the sum does not match up
// to the target

// You can run `node index.js` to view these console logs
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
}

module.exports = hasTargetSum;
