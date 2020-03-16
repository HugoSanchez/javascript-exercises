// Sieve of Eastosthenes.


function sieveOfE(num) {
    // Initiate results array.
    let results = []
    // Create array of length num and populate with value "true".
    let array = Array(num).fill(true)
    // Handle case num < 2
    if (num < 2) return [];
    // Iterate over it til squareRoot of num, 
    for (let i = 2; i < Math.sqrt(num); i++) {
      // check if index is divisible by other elements
      for (let n = num; n > 1; n--){
        // if they are, they're not prime.
        if (i !== n && n % i == 0) array[n] = false
      }
    }
    // Push primes to results array.
    for (let i = 2; i < num; i++){ if (array[i]) results.push(i)}
  
    return results
  }
  
  sieveOfE(10)