function guessingGame() {
    let guess = 0;
    let number = Math.floor(Math.random() * 99);
    let isOver = false;
    
    return function guess(num){
        if(isOver) return "The game is over, you already won!"
        guess++;
        if(num == number) return `You win! You found ${num} in ${guess} guesses.`
        if(num > number){ return `${num} is too high!`}
        if(num < number) {return `${num} is too low!`}

    }

}

const game = guessingGame();

module.exports = { guessingGame };
