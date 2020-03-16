const sentence = "qué palabra se repite mas veces como palabra repite palabra"

const computeMostCommonWord = (string) => {
    let object = {}
    let arr = string.split(" ")

    arr.forEach(word => {
        if (object[word]) {object[word] = object[word] + 1}
        else object[word] = 1 
    })

    return object
}

const returnMostCommonWord = (object) => {
    let array = Object.values(object)
    let max = 0
    let maxIndex = 0
    for (i in array) {
        if (array[i] > max){
            max = array[i]
            maxIndex = i
        }
    }
    console.log('Most used word is: ', Object.keys(object)[maxIndex])
}

returnMostCommonWord(computeMostCommonWord(sentence))