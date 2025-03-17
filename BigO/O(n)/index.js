//O(n) -> the time complexity grows linearly with the size of the input data
//The time complexity of the searchforItem function is O(n) because the time it takes to execute the function grows linearly with the size of the groceries array. If the groceries array has n elements, the searchforItem function will iterate through the array n times to find the item. Therefore, the time complexity of the searchforItem function is O(n).
//The space complexity of the searchforItem function is O(1) because the amount of memory used by the function does not depend on the size of the input data. The function only uses a constant amount of memory to store the item parameter and the loop counter i. Therefore, the space complexity of the searchforItem function is O(1).
//The searchforItem function takes an item parameter and iterates through the groceries array to find the item. If the item is found in the array, the function logs a message to the console. If the item is not found, the function does nothing. The function has a time complexity of O(n) and a space complexity of O(1).



const groceries = ['apple', 'milk', 'sugar', 'bread', 'grapes'];

const searchforItem = (item) => {
    for (let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log('Item found!', item);
        }
    }
}

searchforItem("milk")