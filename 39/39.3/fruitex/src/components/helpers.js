



const choice = (myArray) =>{
    const randNum = Math.floor(Math.random() * myArray.length)
    return myArray[randNum]
}

const remove = (myArray, item) =>{
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] === item){
            myArray.splice(i,1)
            return item
        }
    }
    return undefined
}

export {choice, remove} 