const board =document.getElementsByClassName("board")
const square = document.getElementsByClassName('square')
const players =['x','o']
let currentPlayer = players[0]
const endmessage= document.createElement(h2)
endmessage.textcontent = "x's turn !"
endmessage.style.margintop= '30px'
endmessage.style.textalign ='center'
board.after(endmessage)

const winning_combination =[
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,4,8]
    [2,4,6]
    [0,3,6]
    [1,4,7]
    [2,5,8]
]

// Check if the current player wins
function checkWin(player) {
    const squaresArray = Array.from(square).map(square => square.textContent);
    return winning_combination.some(combination => {
        return combination.every(index => squaresArray[index] === player);
    });
}

// Check if the board is full (tie condition)
function checkTie() {
    const squaresArray = Array.from(square).map(square => square.textContent);
    return squaresArray.every(square => square !== ''); // All squares are filled
}

// Handle the clicks on the squares
//loop through all the squares
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', () => {
        if (square[i].textContent !== '') {
            return; // Skip if the square is already filled
        }

        square[i].textContent = currentPlayer; // Mark the square with the current player's symbol

        // Check for win or tie after the move
        if (checkWin(currentPlayer)) {
            endmessage.textContent = `Game over! ${currentPlayer.toUpperCase()} wins!`;
            return; // End the game
        }

        if (checkTie()) {
            endmessage.textContent = "Game is a draw!";
            return; // End the game
        }

        // Switch to the other player
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        endmessage.textContent = `${currentPlayer.toUpperCase()}'s turn!`;
    });
}
