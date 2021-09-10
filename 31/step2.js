const fs = require("fs");
const axios = require('axios')



const path = process.argv[2];

if(path.slice(0,4) == 'http'){
    webCat(path)
}
else{
    cat()
}


function cat(){
    fs.readFile(`${path}`, 'utf8', (err,data)=>{
        if (err){
            console.log("ERROR")
            console.log(err)
            process.kill(1)
        }
        else{
            console.log(data)
        }
    })
}


async function webCat(){   
    let data = await axios.get(path)
    console.log(data)
}



