function reverseArray(array){
    for (let i = 0; i < array.length / 2; i++){
        let currentWord = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = currentWord
    }
    return array
}

let array = ['something', 'else', 'or', 'any', 'other', 'thing']
console.log(reverseArray(array))