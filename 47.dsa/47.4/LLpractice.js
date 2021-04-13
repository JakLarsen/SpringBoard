class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    traverse(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    append(val){
        const newNode = new Node(val);
        if(this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
    }
    removeEnd(){

    }
    
}
const train = new LinkedList();
