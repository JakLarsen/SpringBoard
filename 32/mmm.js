const express = require('express')
const ExpressError = require('./expressError')

const app = express()
app.use(express.json())





//VALIDATES QUERY STRING INPUT
function validateInput(inputArr){

    //VALIDATE FOR NON-NUMERIC INPUTS
    for(let x of inputArr){
        console.log(x)
        if (isNaN(x)){
            throw new ExpressError("Non-numeric Input", 403)
        }
    }
}


//RETURNS THE MEAN OF A NUMBER ARRAY
function getMean(inputArr){
    let ourSum = 0
    for (let x of inputArr){
        ourSum += parseInt(x)
    }
    return (ourSum/inputArr.length)
}

//RETURNS THE MEDIAN OF A NUMBER ARRAY
function getMedian(inputArr){
    inputArr = inputArr.sort((a,b)=>a-b)
    let oddEven = inputArr.length % 2
    if (oddEven == 0){
        midLeft = inputArr[inputArr.length/2 - 1]
        midRight = inputArr[inputArr.length/2]
        ourValue = ((parseInt(midLeft) + parseInt(midRight))/2)
    }
    else{
        ourValue = parseInt(inputArr[Math.floor(inputArr.length/2)])
    }
    return ourValue
}

//RETURNS THE MODE OF A NUMBER ARRAY
function getMode(inputArr){
    let numMap = {}
    let maxFreq = 0
    inputArr.forEach((num)=>{
        numMap[num] = (numMap[num] || 0) + 1
        if(maxFreq < numMap [num]){
            maxFreq = numMap[num]
            mode = num
        }
    })
    return mode
}




app.get('/', (req, res)=>{
    return res.json("Welcome to Mean, Median, Mode Exercise. Please call /mean /median or /mode with the format: /mean?nums=1,2,3 with the numbers you would like to have the operation performed upon.")
})


app.get('/mean', (req,res, next)=>{
    try{
        let operation = "mean"
        let values = req.query.nums.split(',')

        validateInput(values)
        let ourSum = getMean(values)
        
        let response = {
            operation: operation,
            value: ourSum
        }
        res.json(response)
    }
    catch(e){
        next(e)
    }
})

app.get('/median', (req,res, next)=>{
    try{
        let operation = "median"
        let values = req.query.nums.split(',')

        validateInput(values)
        let ourValue = getMedian(values)
        
        let response = {
            operation: operation,
            value: ourValue
        }
        res.json(response) 
    }
    catch(e){
        next(e)
    }
    
})

app.get('/mode', (req,res, next)=>{
    try{
        let operation = "mode"
        let values = req.query.nums.split(',')

        validateInput(values)
        let mode = getMode(values)       

        let response = {
            operation: operation,
            value: mode
        }
        res.json(response)
    }
    catch(e){
        next(e)
    }
})



//GENERIC 404 HANDLER
app.use((req,res,next)=>{
    const e = new ExpressError("Page not found", 404)
    next(e)
})

//ERROR HANDLER
app.use((error, req, res, next)=>{
    let status = error.status || 500
    let msg =  error.msg
    res.send(`OH NO AN ERROR: ${msg}, ${status}, ${error.stack}`)
})



app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})


module.exports = {getMean, getMedian, getMode}