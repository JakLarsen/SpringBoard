



// new Set([1,1,2,2,3,4])
// //{1,2,3,4}

[...new Set("referee")].join("")
// ['ref']

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{
//  [1,2,3]: true,
//  [1,2,3]: false
//}

const hasDuplicate = (arr) => {
    let mySet = new Set(arr);
    return mySet.size !== arr.length;
}


const vowelCount = (str) => {
    const vowelMap = new Map();
    const vowels = "aeiou";

    const arr = Array.from(str.toLowerCase());
    const vowelsInArr = arr.filter((letter) => vowels.indexOf(letter) !== -1);

    vowelsInArr.forEach((vowel) => {
        if(vowelMap.get(vowel) === undefined){
            vowelMap.set(vowel, 1);
        }
        else{
            vowelMap.set(vowel, vowelMap.get(vowel) + 1);
        }
    });
    return vowelMap;
}

//vowelCount('aEeiIioOoouuUuu')
//Map(5) {"a" => 1, "e" => 2, "i" => 3, "o" => 4, "u" => 5}