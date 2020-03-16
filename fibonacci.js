
// My solution: this solution is better because it is linear.
function fibonacci2(position) {
    let array = [1, 1];
  
    while (array.length < position) {
      array.push(array[array.length - 2] + array[array.length - 1])
    } 
    return array[array.length - 1]
  }
  
  // Recursive solution: this is really bad!! because it is O n^2 (exponetial)
  function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2)
  }
  
  // This recursive solution has linear runtime
  function fibMemo(index, cache){
    let nums = cache ? cache : [1, 1];
    nums.push(nums[nums.length - 2] + nums[nums.length - 1])
  
    if (nums[index - 1]) return (nums[nums.length - 1])
    else return fibMemo(index, nums)
  }
  
  // This is also recursive and linear, but uglier and harder to read.
  function fibMemo(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
      if (index < 3) return 1;
      else {
        cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
      }
    }
    return cache[index];
  }
   
  fibMemo(500);
  
  console.log(fibMemo(9))