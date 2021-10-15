
function guessingGame(){
    
    const target = Math.floor(Math.random()*100) + 0
    let hasWon = false
    let guesses = 0
    console.log('Secret Target', target)

    return function guess(guess){
        if (hasWon){
            return 'You already won'
        }
        else if (guess == target){
            guesses += 1
            hasWon = true
            return `YOU WIN! Number of gueses: ${guesses}`
        }
        else if (guess > target){
            guesses += 1
            return "You're too high."
        }
        else if (guess < target){
            guesses += 1
            return "You're too low."
        }
    }
 
}

// let game = guessingGame();
// for(let i = 0; i < 100; i ++){
//     console.log(game(`${i}`))
// }


module.exports = {guessingGame}