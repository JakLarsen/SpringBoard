


                    //QUEUE DLL IMPLEMENTATION



//NODE
class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

//QUEUE
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    //APPEND TO THE END OF A QUEUE
    append(val){
        //Create Node
        let newNode = new Node(val)
        //If queue is empty
        if(!this.first){
            //newNode is first node
            this.first = newNode
            //newNode is last node
            this.last = newNode
            //update size
            this.size += 1
        }
        //If queue is not empty
        else{
            //newNode is next node
            this.last.next = newNode
            //Update newNode to hold 2nd to last as prev
            newNode.prev = this.last
            //Update newNode to last
            this.last = newNode
            //Update size
            this.size += 1
        }
    }

    //POP FRONT VALUE FROM QUEUE
    popFront(){
        //If queue is empty
        if(!this.first){
            throw Error ('QUEUE IS EMPTY')
        }
        //If there is only one node in queue
        else if(this.first == this.last){
            let valueToReturn = this.first.val
            this.first = null
            this.last = null
            this.size -= 1
            return valueToReturn
        }
        //Populated queue with 2+ nodes
        else{
            let valueToReturn = this.first.val
            //2nd prev = null
            this.first.next.prev = null
            //2nd becomes first
            this.first = this.first.next
            this.size -= 1
            return valueToReturn
        }
    }

    //PEAK AT FRONT OF QUEUE
    peek(){
        //If the queue is empty
        if (!this.first){
            throw Error ('QUEUE IS EMPTY')
        }
        else{
            return this.first.val
        }
    }

    //IS THE QUEUE EMPTY
    isEmpty(){
        return this.size === 0
    }
}

//DRIVER
queuee = new Queue()
queuee.append(1)
queuee.append(2)
queuee.append(3)
queuee.append(4)
