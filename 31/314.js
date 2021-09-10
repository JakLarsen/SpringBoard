const faker = require('faker')
// const helpers = require('./helpers')
const {add} = require('./helpers')
const fs = require('fs')



console.log('halo')
const annoyingGreet = () => {
    for(let i = 0; i < 10; i++){
        console.log('Hello from Node')
    }
}

annoyingGreet()

process.on('exit', function(code){
    console.log(`exit code: ${code}`)
})

console.log(faker.name.findName())

const argv = process.argv;
for (let i=0;i<argv.length;i+=1){
    console.log(i, argv[i])
}


// console.log(helpers.add(5, helpers.MY_GLOBAL))
console.log(add(5, 6))

//fs.readFile(path, encoding, callback)
fs.readFile('poem.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('ERROR')
        console.log(err)
        process.kill(1)
    }
    else{
        console.log(data)
    }
})

let data = "With poems being poems on poems"
fs.writeFile('poem.txt', data, 'utf-8', (err) => {
    if(err){
        console.log('ERROR')
        console.log(err)
        process.kill(1)
    }
    else{
        console.log('Successfully wrote to file')
    }
})

fs.readFile('poem.txt', 'utf8', (err, data)=>{
    if(err){
        console.log('ERROR')
        console.log(err)
        process.kill(1)
    }
    else{
        console.log(data)
    }
})

let newData = "This is added, not in place of!"
fs.writeFile('poem.txt', newData, {encoding: 'utf8', flag: 'a'}, (err) => {
    if(err){
        console.log('ERROR')
        console.log(err)
        process.kill(1)
    }
    else{
        console.log('Successfully wrote to file')
    }
})

fs.readFile('poem.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('ERROR')
        console.log(err)
        process.kill(1)
    }
    else{
        console.log(data)
    }
})