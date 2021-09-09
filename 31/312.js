

function wait3Seconds(){
    return new Promise((resolve, reject) => {

        setTimeout(resolve, 3000)
        // reject()
    })
}

wait3Seconds()
    .then(() => console.log("WE WAITED"))
    .catch(() => console.log("Rejected Promise"))



const h1 = document.querySelector('h1')
setTimeout(()=>{
    h1.style.color="red"
}, 1000)




function changeColor(el, color){
    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            el.style.color = color;
            resolve()
        }, 1000)
    })
}

changeColor(h1, "red")
    .then(() => changeColor(h1, "blue"))
    .then(() => changeColor(h1, "orange"))
    .then(() => changeColor(h1, "pink"))


    


function mockAjaxRequest (){
    return new Promise(function(resolve, reject){

        let probSuccess = 0.9
        let requestTime = 1000

        setTimeout(() => {
            let randNum = Math.random()
            if (randNum < probSuccess){
                let data = randNum
                resolve(data)
            }
            else{
                reject("Sorry, no data, cause you is rejectedddd")
            }
        }, requestTime)
    })
}   

mockAjaxRequest()
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data)
        return mockAjaxRequest()
    })
 
    .catch(err => console.log(err))