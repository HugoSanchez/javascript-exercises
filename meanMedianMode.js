function getMean(array) {
    let total = 0;
    array.forEach(num => total = total + parseInt(num))
    return total / array.length
}
  
function getMedian(array) {
    let sorted = array.sort((a, b) => a - b)
    let half = Math.floor(sorted.length / 2)
    let median;
  
    if (sorted.length % 2 !== 0) median = sorted[half]
    else {
      let first = sorted[half - 1]
      let second = sorted[half]
      median = (first + second) / 2
    } 
    return median
}
  
function getMode(array) {
    // Warning: we are not taking into account that there might 
    // be more than one mode.
    let object = {}
    array.forEach(num => {
      if (!object[num]) object[num] = 0
      object[num]++
    })
  
    let max = 0;
    let value = null
    for (i in object) {
      if (object[i] > max) {
        max = object[i]
        value = i
      }
    }
    return value
}
  
function meanMedianMode(array){
    let object = {}
    object["mean"] = getMean(array);
    object["median"] = getMedian(array);
    object["mode"] = getMode(array);
    return object
}
  
let array = ['1', '2', '3', '4', '4', '5', '5']
console.log(meanMedianMode(array))