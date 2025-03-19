

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    get(index){
        return this.data[index];
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    shift(){
        const firstItem =  this.data[0];
        for(let i = 0; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    
    delete(index){
        const item = this.data[index];
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

}

const myNewArray = new MyArray()
myNewArray.push("Apple")
myNewArray.push("Orange")
myNewArray.push("Mango")
//myNewArray.pop();
//myNewArray.unshift("Banana");

//myNewArray.get(2);

console.log(myNewArray)
