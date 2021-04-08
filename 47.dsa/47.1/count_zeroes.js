


//We can use a binary search instead of linear search
//-because it's sorted

function countZeroes(arr, left = 0, right = arr.length -1){
    
    if(right >=  left){
        console.log(left, right);
        let ourVal = Math.floor((right+left)/2);
        console.log(ourVal);

        //reached left end
        if(ourVal == 0){
            if (arr[ourVal] == 0){
                return arr.length;
            }
            else{
                return 0;
            }
        }
        //found what we're looking for
        else if (arr[ourVal] === 0 && arr[ourVal -1] === 1){
            //if at idx 3 of 6, we have 4 0's at 3,4,5,6
            return arr.length - ourVal;
        }
        //found a 1 = move halfway to right
        else if (arr[ourVal] == 1){
            return countZeroes(arr, ourVal + 1, right);
        }
        //found a 0, move halfway to left
        else if (arr[ourVal] == 0){
            return countZeroes(arr, left, right - 1);
        }
    }
    return 0;
}

console.log(countZeroes([1,1,1,1,0,0]), 'output') // 2
console.log(countZeroes([1,0,0,0,0]), 'output') // 4
console.log(countZeroes([0,0,0]), 'output') // 3
console.log(countZeroes([1,1,1,1,1,1,1]), 'output') // 0