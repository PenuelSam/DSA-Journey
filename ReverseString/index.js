const reverseStr = (string) => {
  return  string.split("").reverse().join("")
}

console.log(reverseStr("Hello"))

const palindrome = (str) => str.split("").reverse().join("") === str 
   /*{const strR = str.split("").reverse().join("")
    if(str === strR){
        console.log("The string is a palindrome")
    }else{
        console.log("The string is not a palindrome")
} }*/


console.log(palindrome("madam"))

const intReverse = (int) => {
    const integer = int.toString().split("").reverse().join("")
    return parseInt(integer) * Math.sign(int)
}

console.log(intReverse(-1234))

const capitalize = (str) => {
   return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalize("hello world"))

const fizzBuzz = (n) => {
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        } else if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(15)