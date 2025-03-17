//O(n^2) -> the time complexity grows quadratically with the size of the input data
//The time complexity of the findPairs function is O(n^2) because the time it takes to execute the function grows quadratically with the size of the arr array. The function uses a nested loop to iterate through all possible pairs of elements in the array, resulting in n * (n - 1) / 2 iterations. Therefore, the time complexity of the findPairs function is O(n^2).
//The space complexity of the findPairs function is O(1) because the amount of memory used by the function does not depend on the size of the input data. The function only uses a constant amount of memory to store the arr parameter and loop counters i and j. Therefore, the space complexity of the findPairs function is O(1).
//The findPairs function takes an array of numbers as input and finds all possible pairs of elements in the array. The function uses a nested loop to iterate through the array and log each pair of elements to the console. The function has a time complexity of O(n^2) and a space complexity of O(1).

function findPairs(arr){
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log("Pairs: ",arr[i], arr[j]);
        }
    }
}

const numbers = [1, 2, 3, 4, 5];

findPairs(numbers)