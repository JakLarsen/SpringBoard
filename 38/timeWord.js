//STR EX. 00:00 => midnight (EDGECASE)
//STR EX. 01:00 => one am (EDGECASE)
//STR EX. 12:00 => noon (EDGECASE)
//STR EX. 05:05 => five five am
//STR EX. 23:20 => eleven twenty pm

function timeWord(string){
    

    const ourHours = {
        '00': 'twelve',
        '01': 'one',
        '02': 'two',
        '03': 'three',
        '04': 'four',
        '05': 'five',
        '06': 'six',
        '07': 'seven',
        '08': 'eight',
        '09': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'one',
        '14': 'two',
        '15': 'three',
        '16': 'four',
        '17': 'five',
        '18': 'six',
        '19': 'seven',
        '20': 'eight',
        '21': 'nine',
        '22': 'ten',
        '23': 'eleven'
    }

    //I'm going 0 -> 15 here, because I'm not writing out 59 numbers when I can use the first 15 as examples
    ourMinutes = {
        '00': '',
        '01': 'oh one',
        '02': 'oh two',
        '03': 'oh three',
        '04': 'oh four',
        '05': 'oh five',
        '06': 'oh six',
        '07': 'oh seven',
        '08': 'oh eight',
        '09': 'oh nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen'
    }

    let ourTimeWord = ""

    let ourHourKey = string.slice(0,2)
    let ourHourWord = ourHours[`${ourHourKey}`]
    let ourMinuteKey = string.substr(3)
    let ourMinuteWord = ourMinutes[`${ourMinuteKey}`]
    let ourAMPM = ""

    if (parseInt(ourHourKey) < 12){
        ourAMPM = "AM"
    }
    else{
        ourAMPM = "PM"
    }
    
    if (ourMinuteWord == ''){
        ourTimeWord = `${ourHourWord} ${ourAMPM}`
    }
    else{
        ourTimeWord = `${ourHourWord} ${ourMinuteWord} ${ourAMPM}` 
    }

    //CHECK FOR EDGE CASES
    if (ourHourKey == '00' && ourMinuteKey == '00'){
        ourTimeWord = 'midnight'
    }
    else if (ourHourKey == '12' && ourMinuteKey == '00'){
        ourTimeWord = 'noon'
    }

    return ourTimeWord
}


// console.log(timeWord('00:00')) //=> midnight
// console.log(timeWord('01:00')) //=> one AM
// console.log(timeWord('12:00')) //=> noon
// console.log(timeWord('04:15')) //=> four fifteen AM
// console.log(timeWord('05:05')) //=> five oh five AM
// console.log(timeWord('00:01')) //=> twelve oh one AM
// console.log(timeWord('12:15')) //=> twelve fifteen PM
// console.log(timeWord('16:07')) //=> four oh seven PM

module.exports = {timeWord}