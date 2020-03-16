// Caesar Cipher.
// For a given string, it returns a string where 
// each original charachters has shifted n positions.

function caesarCipher(string, num) {
    // Compute module to make sure num !> 26
    num = num % 26
    // Create alphabet array
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // Instantiate new array.
    let arr = []
  
    for (let i = 0; i < string.length; i++) {
      // Get current later based on index.
      let currentChar = string[i]
      // Instantiate new index and check if it's < 0.
      let index = alpha.indexOf(currentChar.toLowerCase()) + num
      if (index < 0) index = index + 26
  
      // Proceed to push chars to new array.
      if (currentChar === ' ') arr.push(' ')
      if (currentChar === currentChar.toUpperCase()) {
        arr.push(alpha[index].toUpperCase())}
      else arr.push(alpha[index])
    }
    // Return new array.
    return arr.join('')  
  }
  
  console.log(caesarCipher('Big Car', -16))
  