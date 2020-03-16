// Fizz Buzz
// Print a numbers from 1 to num.
// if number is divisible by 3, log fizz,
// if number is divisible by 5, log buzz,
// if number is divisible by both, log fizzbuzz,
// else log number.

function fizzBuzz(num) {
    for (let i = 0; i < num; i++) {
      // First case (both)
      if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) console.log('FizzBuuz!')
      // Divisible by 3
      else if ((i + 1) % 3 === 0) console.log('Fizz!')
      // Divisible by 5
      else if ((i + 1) % 5 === 0) console.log('Buzz!')
      // Log the current number
      else console.log(i+1)
    }
  }
  
  fizzBuzz(20)