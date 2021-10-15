



function curriedAdd(total){
  if (total == undefined){
    return 0
  }
  return function addNum(num){
    if (num === undefined){
      return total
    }
    total += num
    return addNum
  }
}


// let firstAdder = curriedAdd();
// console.log(firstAdder())


module.exports = { curriedAdd };



