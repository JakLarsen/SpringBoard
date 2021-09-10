const fs = require("fs");

const path = process.argv[2];

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
cat()

