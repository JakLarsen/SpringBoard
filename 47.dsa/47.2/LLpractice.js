



class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = nnext;
    }
}

const first = new Node('google.com');
const second = new Node('reddit.com');
const third = new Node('Amazon.com');

first.next = second;
second.next = third;