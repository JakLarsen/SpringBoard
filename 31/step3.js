const fs = require("fs");
const axios = require('axios')



const path = process.argv[2];
const printInOut = process.argv[3]
const fileName = process.argv[4]

if(path.slice(0,4) == 'http'){
    webCat()
}
else{
    cat()
}


function writeToFile(outPath, data){
    console.log('in WTF')
    console.log(outPath)
    console.log(data)
    fs.writeFile(outPath, data, 'utf-8', (err) => {
        if(err){
            console.log('ERROR')
            console.log(err)
            process.kill(1)
        }
        else{
            console.log('Successfully wrote to file')
        }
    })
}

function cat(){
    fs.readFile(`${path}`, 'utf8', (err, data)=>{
        if (err){
            console.log("ERROR")
            console.log(err)
            process.kill(1)
        }
        else{
            console.log(data)
            console.log(printInOut == '--out')
            if (printInOut == '--out'){
                writeToFile(`${fileName}`, data)
            }
            else{
                console.log(data) 
            }
        }
    })
}



async function webCat(){   
    let data = await axios.get(path)
    if (printInOut == '--out'){
        writeToFile(`${fileName}`, data.data)
    }
    else{
        console.log(data.data) 
    }
}
