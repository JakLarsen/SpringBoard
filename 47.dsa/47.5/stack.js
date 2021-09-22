                    
                    
                    
                    //DLL STACK IMPLEMENTATION



//NODES FOR STACK
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
  
//STACK
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //APPEND A VALUE TO THE END(TOP) OF OUR STACK O1
    append(val) {
        const newNode = new Node(val)
        //If we already have a node
        if (this.first){
            //Append to last node
            this.last.next = newNode
            //Reference back to second to last node
            newNode.prev = this.last
            //Update last node
            this.last = newNode
        }
        //If first node in
        else{
            //Node is both first and last 
            this.first = newNode
            this.last = newNode
        }
        this.size += 1
    }

    //POP A VALUE FROM THE END(TOP) OF OUR STACK O1
    pop() {
        //If stack is empty
        if (this.isEmpty()){
            throw Error('Stack is empty')
        }
        //If only 1 item
        if (this.last.prev == null){
            //Capture value to return
            let valueToReturn = this.last.val
            //Reset first to null
            this.first = null
            this.last = null
            this.size -= 1
            return valueToReturn
        }
        //Otherwise remove last
        else{
            //Capture value to return
            let valueToReturn = this.last.val
            //Set 2nd to last next to null
            this.last.prev.next = null
            //Set 2nd to last as last
            this.last = this.last.prev
            //update size
            this.size -= 1
            //return
            return valueToReturn
        }
    }

    //LOOK AT THE END(TOP) VALUE OF THE STACK
    peek() {
        if(!this.first){
            throw Error('Stack is Empty')
        }
        else{
            return this.last.val 
        }
    }

    //CHECK IF THE STACK IS EMPTY
    isEmpty() {
        return this.size === 0
    }
}

//DRIVER
stackie = new Stack()
stackie.append(1)
stackie.append(2)
stackie.append(3)
stackie.append(3)
stackie.append(3)