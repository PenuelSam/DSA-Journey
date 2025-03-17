//O(1) -> the time complexity is constant regardless of the size of the input data
//The time complexity of the getNumber function is O(1) because the time it takes to execute the function does not depend on the size of the numbers array. The function simply returns the element at the specified index in the array, which can be done in constant time. Therefore, the time complexity of the getNumber function is O(1).
//The space complexity of the getNumber function is also O(1) because the amount of memory used by the function does not depend on the size of the input data. The function only uses a constant amount of memory to store the arr and index parameters. Therefore, the space complexity of the getNumber function is O(1).


const numbers = [1, 2, 3, 4, 5];

getNumber = (arr, index) => arr[index];

console.log(getNumber(numbers, 2));