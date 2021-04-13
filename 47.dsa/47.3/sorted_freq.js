
//given a sorted array, check how many times a number occurs in the array
//log n time comp.
//we need a function to find the leftmost of that num
//we need a function to find the rightmost of that num
//then we simply subtract them

function sortedFrequency(arr, num){
    let leftmost = findLeft(arr, num, left = 0, right = arr.length - 1);
    console.log(leftmost);
    let rightmost = findRight(arr, num, left = leftmost, right = arr.length - 1);
    console.log(rightmost);

    if(leftmost != -1 && rightmost != -1){
        return rightmost - leftmost + 1
    }
    else{
        return -1;
    }
}

function findLeft(arr, num, left = 0, right = arr.length - 1){

    if(left <= right){
        
        let ourVal = Math.floor((left+right)/2);
        
        if(arr[ourVal] == num){
            if (arr[ourVal-1] == num){
                return findLeft(arr, num, left, ourVal - 1);
            }
            else{
                return ourVal;
            }
        }
        else if (arr[ourVal] > num){
            return findLeft(arr, num, left, ourVal - 1);
        }
        else if (arr[ourVal] < num){
            return findLeft(arr, num, left + 1, right);
        } 
    }
    return -1;
}

function findRight(arr, num, left = 0, right = arr.length - 1){

    if(left <= right){
        
        let ourVal = Math.floor((left+right)/2);
        
        if(arr[ourVal] == num){
            if (arr[ourVal+1] == num){
                return findRight(arr, num, ourVal + 1, right);
            }
            else{
                return ourVal;
            }
        }
        else if (arr[ourVal] > num){
            return findRight(arr, num, left, ourVal - 1);
        }
        else if (arr[ourVal] < num){
            return findRight(arr, num, left + 1, right);
        } 
    }
    return -1;
}





console.log(sortedFrequency([1,1,2,2,2,2,3],2),'output') // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3),'output') // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1),'output') // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4),'output') // -1