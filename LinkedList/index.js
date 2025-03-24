//SingleLinkedList

class Node {
    constructor(value){
        this.head = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){

        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;

        while(temp.next){
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;

    }

    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        newNode.next = this.head
        this.head = newNode
           
        this.length++

        return this;
    }

    shift(){

        if(!this.head){
            return undefined
        }

        let temp = this.head;
        this.head = this.head.next;
        temp = null;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        
        return temp;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let temp = this.head;

        while(temp){
            if(!temp.next){
                return temp;
            }

            temp = temp.next;
        }
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        
        for(let i = 0; i < this.length; i++){
            if(i === index){
                return this.head
            }
            this.head = this.head.next
        } 
    }

    set(index, value){
       let temp = this.get(index)

       if(temp){
        temp.value = value
        return true
       }

       return false
    }


    insert(index, value){
        if(index === 0){
            return this.unshift(value)
        }

        if(index === this.length){
            return this.push(value)
        }

        

        const newNode = new Node(value)

        let prev = this.get(index - 1)

        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }

    size(){
        let counter = 0
        let temp = this.head

        while(temp){
            counter++
            temp = temp.next
        }

        return counter;
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.push(20)
//myLinkedList.pop()
myLinkedList.unshift(30)
//myLinkedList.push(40)
//myLinkedList.shift()
//myLinkedList.set(2, 60)
//myLinkedList.insert(3, 80)
console.log(myLinkedList.reverse())



//DoublyLinkedList

/*class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this

    }

    pop(){

        if(this.length === 0){
            return undefined
        }
        let temp = this.tail

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.prev

        this.tail.next = null

        temp.prev = null
        this.length--
    }

    unshift(value){
        const newNode = new Node(value)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }


        newNode.next =this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++

        return this

    }

    shift(){

        if(this.length === 0){
            return undefined
        }

        let temp = this.head

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next
        this.head.prev = null
        temp.next = null
        this.length--
        
        return temp
    }

}

const myDoublyLinkedList = new DoublyLinkedList(10)

myDoublyLinkedList.push(100)
myDoublyLinkedList.push(50)
myDoublyLinkedList.unshift(5)
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList)*/

