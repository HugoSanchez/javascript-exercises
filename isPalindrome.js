// Is palindrome

function isPalindrom(string) {
    // Parse string, remove punctuation and set to lowercase.
    let re = /[^A-Za-z0-9]/g;
    let str = string.toLowerCase().replace(re, '');
    let len = str.length
    let result = true
    // Iterate from index 0 to the middle and compare.
    for (let i = 0; i < len / 2; i++) {
      if (!str[i] == str[len -1 - i]) result = false
    }
    console.log(result)
}
  
// Example where we create a set of valid characters;
function isPalindrom2(string) {
    // Parse string, remove punctuation and set to lowercase.
    string = string.toLowerCase();
    let charactersArr = string.split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lettersArr = [];
    let result = true
    // Iterate to get only valid characters.
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    // Join array again.
    let str = lettersArr.join('')
    let len = str.length
    // Iterate from index 0 to the middle and compare.
    for (let i = 0; i < len / 2; i++) {
      if (!str[i] == str[len -1 - i]) result = false
    }
    console.log(result)
}
  
  
  
  
isPalindrom2("Madam I'm Adam")
isPalindrom2("A man, a plan, a canal, Panama")