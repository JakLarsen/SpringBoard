




function createAccount(pin, amount = 0){

  return {
    updateBalance(inputPin, value){
      if (inputPin != pin) return 'Incorrect PIN'
      amount += value
      return 'Balance updated.'
    },
    checkBalance(inputPin){
      if (inputPin != pin) return 'Incorrect PIN'
      return `$${amount}`
    },
    deposit(inputPin, deposit){
      if (inputPin != pin) return 'Incorrect PIN'
      this.updateBalance(inputPin, deposit)
      let currentBalance = this.checkBalance(inputPin)
      return `$${deposit} deposited. Current balance: ${currentBalance}`
    },
    withdraw(inputPin, withdrawal){
      if (inputPin != pin) return 'Incorrect PIN'
      if (withdrawal > amount){
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      }
      this.updateBalance(inputPin, -withdrawal)
      let currentBalance = this.checkBalance(inputPin)
      return `$${withdrawal} withdrawn. Current balance: ${currentBalance}`
    },
    changePin(inputPin, newPin){
      if (inputPin != pin) return 'Incorrect PIN'
      pin = newPin
      return 'Pin successfully changed.'
    }
  }

}

// let jakesaccount = createAccount(1111, 500)
// console.log(jakesaccount.checkBalance(1111))
// console.log(jakesaccount.checkBalance(2222))
// console.log(jakesaccount.deposit(1111,750))
// console.log(jakesaccount.deposit(2222,750))
// console.log(jakesaccount.withdraw(1111,250))
// console.log(jakesaccount.withdraw(2222,250))
// console.log(jakesaccount.changePin(1111,3333))
// console.log(jakesaccount.changePin(2222,3333))
// console.log(jakesaccount.checkBalance(1111))
// console.log(jakesaccount.checkBalance(3333))


module.exports = { createAccount };
