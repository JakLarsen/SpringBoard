let origi = [1,2,3,3,4,5,5];

function calculateTaxes(income) {
    if(!Number.isFinite(income)){
        throw new Error('Invalid income');
    }
   
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }


  
function removeDups(values){
    const arr = [...new Set(values)];
    console.log(typeof values);

    if(typeof values === 'string'){
        return arr.join('');
    }
    return arr;
}

function remove(arr, val){
    return arr.filter((el) => {
        el !== val;
    })
}



