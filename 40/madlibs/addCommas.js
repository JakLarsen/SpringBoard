













function addCommas(num) {

    let stringNum = String(num)
    let nonDecimalStart = stringNum.length - 1
    let decimalPoint = stringNum.indexOf(".")
    let ourString = ""
    let backFragment = ""
    let stringDecimal = null

    if(decimalPoint > -1){
        nonDecimalStart = decimalPoint - 1
        stringDecimal = stringNum.slice(decimalPoint, stringNum.length) 
    }

    if (stringDecimal){
        backFragment += stringDecimal
    }

    //Iterate over string from left of decimal to beginning of string
    //adding , after every 3 numbers

    count = 0
    for(let i = nonDecimalStart; i > -1; i--){
        if (count % 3 == 0 && count != 0 && stringNum[i] != '-'){
            ourString = `${stringNum[i]}` +','+ `${backFragment}`
            count = 0
        }
        else{
            ourString = stringNum[i] + backFragment
        }
        backFragment = ourString
        count += 1
    }    
    return ourString
}


module.exports = addCommas;