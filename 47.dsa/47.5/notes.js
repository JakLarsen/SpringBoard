

//Implementing a Queue as an object using array methods is INEFFICIENT

// class Queue{
//     constructor(){
//         this.data = []
//     }
//     enqueue(val){
//         this.data.push(val) 
//         //O1
//     }
//     dequeue(){
//         return this.data.shift()
//         //On
//     }
// }

// const waitLine = new Queue()
// waitLine.enqueue('Charlie')
// waitLine.enqueue('Charles')
// console.log(waitLine.data)


//FOR PRIORITY QUEUES
//USING AN ARRAY HERE NOT THAT EFFICIENT
//LL AND DLL BOTH THE SAME BAD
//NEED TO USE A HEAP DATA STRUCTURE
// class PriorityQueue{
//     constructor(){
//         this.data = []
//     }
//     add(priority, value){
//         this.data.push({priority, value})
//     }
//     popPrio(){
//         let maxIDX = 0
//         let maxPriority = this.data[0].priority
//         for(let i = 1; i < this.data.length; i++){
//             if (this.data[i].priority > maxPriority){
//                 maxPriority = this.data[i].priority
//                 maxIDX = i
//             }
//         }
//         return this.data.splice(maxIDX, 1)[0].value
//     }
// }