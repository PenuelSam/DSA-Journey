function twoSum(num,target){
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1; j < num.length; j++){
            if(num[i] + num[j] === target){
                return [i, j]
            }
        }
    }

    return null
}

const num = [2,7,11,15]
const target = 9
console.log(twoSum(num, target))